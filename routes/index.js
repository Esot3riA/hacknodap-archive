const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const bkfd2Password = require('pbkdf2-password');

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2'
});
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'hacknodap-archive-assets',
    key: function(req, file, cb) {
      let filename = Date.now().toString();
      if (process.env.NODE_ENV !== 'production')
        filename = 'local_' + filename;
      cb(null, filename);
    }
  })
});
const hasher = bkfd2Password();

module.exports = function(app, History, Account) {
  app.get('/api/histories', (req, res) => {
    History.find({}, '_id imageURL date title')
      .sort({ 'date': -1 })
      .exec((err, rawHistories) => {
        if (err)
          return res.status(500).send({ error: 'database failure' });
        
        // Format data string yyyy-MM-dd
        let histories = JSON.parse(JSON.stringify(rawHistories));
        histories.forEach(history => {
          history.date = history.date.slice(0, 10);
        });
        res.json(histories);
      });
  });
  
  app.get('/api/history/:history_id', (req, res) => {
    History.findById(req.params.history_id, '_id imageURL date title', (err, rawHistory) => {
      if (err)
        return res.status(500).json({ error: 'database failure' });
      if (!rawHistory)
        return res.status(404).json({ error: 'history not found' });
      
      let history = JSON.parse(JSON.stringify(rawHistory));
      history.date = history.date.slice(0, 10);
      res.json(history);
    });
  });
  
  app.post('/api/history', upload.array('image'), (req, res) => {
    const date = req.body.date;
    const title = req.body.title;
    const imageFiles = req.files;
    let imageURL = [];
    imageFiles.forEach(imageFile => {
      const imagePath = imageFile.location;
      const imageUrlPath = imagePath.substring(imagePath.lastIndexOf('/'));
      imageURL.push(imageUrlPath);
    });
    
    const history = new History();
    history.date = date;
    history.title = title;
    history.imageURL = imageURL;
    
    history.save(err => {
      if (err) {
        console.error(err);
        res.json({ result: 0 });
        return;
      }
      res.json({ result: 1 });
    });
  });
  
  app.delete('/api/history/:history_id', (req, res) => {
    // Remove images
    History.findById(req.params.history_id, 'imageURL', { lean: true },(err, history) => {
      let count = history.imageURL.length;
      history.imageURL.forEach(imagePath => {
        const params = {
          Bucket: 'hacknodap-archive-assets',
          Key: imagePath.substring(1)
        };
        
        s3.deleteObject(params, (err) => {
          count--;
          if (err)
            console.log(err);
          if (count <= 0) {
            // Remove history in DB
            History.deleteOne({ _id: req.params.history_id }, err => {
              if (err)
                return res.status(500).json({ error: 'database failure' });
              res.status(204).end();
            });
          }
        });
      });
    });
  });
  
  app.post('/api/signup', (req, res) => {
    // Check username format
    const usernameRegex = /^[a-z0-9]+$/;
    if (!usernameRegex.test(req.body.username)) {
      return res.status(400).json({
        error: "INVALID USERNAME",
        code: 1
      });
    }
    // Check password length
    if (req.body.password.length < 4 || typeof req.body.password !== "string") {
      return res.status(400).json({
        error: "INVALID PASSWORD",
        code: 2
      });
    }
    // Check user existance
    Account.findOne({ username: req.body.username }, (err, exists) => {
      if (err)
        throw err;
      if (exists) {
        return res.status(409).json({
          error: "USERNAME EXISTS",
          code: 3
        });
      }
      
      // Create account
      hasher({ password: req.body.password }, (err, pass, salt, hash) => {
        let account = new Account({
          username: req.body.username,
          password: hash,
          salt: salt
        });
        account.save(err => {
          if (err)
            throw err;
          return res.json({ success: true });
        });
      });
    });
  });
};
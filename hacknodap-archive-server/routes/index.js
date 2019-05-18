var multer = require('multer');
var upload = multer({ dest: 'static/images/' });

module.exports = function(app, History) {
  
  app.get('/histories', (req, res) => {
    History.find({}, {
      "_id": false,
      "imageURL": true,
      "date": true,
      "title": true
    }).sort({ 'date': -1 }).exec((err, historyModels) => {
      if (err)
        return res.status(500).send({ error: 'database failure' });
      
      // Format data string yyyy-MM-dd
      let histories = JSON.parse(JSON.stringify(historyModels));
      histories.forEach(history => {
        history.date = history.date.slice(0, 10);
      });
      
      res.json(histories);
    });
  });
  
  app.post('/histories', upload.array('image'), (req, res) => {
    const date = req.body.date;
    const title = req.body.title;
    const imageFiles = req.files;
    let imageURL = [];
    imageFiles.forEach(imageFile => {
      const imagePath = imageFile.path;
      const imageUrlPath = imagePath.substring(imagePath.indexOf('/'));
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
  
  // Old codes
  app.put('/activities/:activity_id', function(req, res) {
    Activity.findById(req.params.activity_id, function(err, activity) {
      if (err)
        return res.status(500).json({ error: 'database failure' });
      if (!activity)
        return res.status(404).json({ error: 'activity not found' });
      
      if (req.body.created)
        activity.created = req.body.created;
      if (req.body.title)
        activity.title = req.body.title;
      if (req.body.imageURL)
        activity.imageURL = req.body.imageURL;
      
      activity.save(function(err) {
        if (err)
          res.status(500).json({ error: 'failed to update' });
        res.json({ message: 'todo updated' });
      });
    });
  });
  
  app.delete('/activities/:activity_id', function(req, res) {
    Activity.remove({ _id: req.params.activity_id }, function(err) {
      if (err)
        return res.status(500).json({ error: 'database failure' });
      res.status(204).end();
    });
  });
  
};
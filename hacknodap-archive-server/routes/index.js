var multer = require('multer');
var upload = multer({ dest: 'images/' });

module.exports = function(app, Activity) {
  
  app.get('/activities', function(req, res) {
    Activity.find({}).sort({ 'created': 1 }).exec(function(err, activities) {
      if (err)
        return res.status(500).send({ error: 'database failure' });
      res.json(activities);
    });
  });
  
  app.post('/histories', upload.array('image'), (req, res) => {
  
    const date = req.body.date;
    const title = req.body.title;
    const imageFiles = req.files;
    let images = [];
    imageFiles.forEach(imageFile => {
      images.push(imageFile.path);
    });
    
    const activity = new Activity();
    activity.date = date;
    activity.title = title;
    activity.images = images;
    
    activity.save(err => {
      if (err) {
        console.error(err);
        res.json({ result: 0 });
        return;
      }
      res.json({ result: 1 });
    });
  });
  
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
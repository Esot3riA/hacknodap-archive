var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  date: Date,
  title: String,
  images: [String]
});

module.exports = mongoose.model('activity', activitySchema);
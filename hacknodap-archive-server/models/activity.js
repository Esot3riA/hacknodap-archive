var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  created: { type: Date, default: Date.now },
  title: String,
  imageURL: String
});

module.exports = mongoose.model('activity', activitySchema);

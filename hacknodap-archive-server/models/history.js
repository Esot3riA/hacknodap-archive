const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
  date: Date,
  title: String,
  imageURL: [String]
});

module.exports = mongoose.model('history', historySchema);
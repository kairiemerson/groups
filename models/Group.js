var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Group = new Schema({
  name: String,
  city: String,
  state: String,
  country: String,
  slug: String,
  _owner: Schema.Types.ObjectId,
  updated: Date,
  created: Date
});

module.exports = mongoose.model('Group', Group);

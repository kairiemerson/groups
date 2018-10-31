var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  username: {required: true, type: String, unique: true},
  password: {required: true, type: String, min: 8},
  email: String,
  active: Boolean,
  created: Date
}));

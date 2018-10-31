// Initialize resources
var express = require('express');
var router = express.Router();
var User = require('../models/User');
var slugify = require('slugify');
var bcrypt = require('bcrypt-nodejs')

// Routing Paths:
router.get('/:id', (req,res) => {
  User.findOne({'_id':req.params.id}, (err, user) => {
    res.send(user.username);
  });
});
router.post('/register', (req,res) => {
  var safepass = bcrypt.hashSync(req.body.password);
  User.create({
    username: req.body.username,
    password: safepass,
    email: req.body.email,
    active: 1,
    created: Date()
  });
});
// End Routing Paths.

// Export Router Funciton
module.exports = router

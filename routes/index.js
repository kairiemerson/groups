// Initialize Resources
var express = require('express');
var router = express.Router();
var Group = require('../models/Group');
var slugify = require('slugify');

// Routing Paths:
router.get('/', (req, res) => {
  res.render('index', {title: 'Hello!', message: 'World!'});
});

// End Routing Paths

// Export Router Functions
module.exports = router

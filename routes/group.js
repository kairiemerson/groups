// Initialize Resources
var express = require('express');
var router = express.Router();
var Group = require('../models/Group');
var slugify = require('slugify');

// Routing Paths:
router.get('/', (req, res) => {
  Group.find(function(err, groups) {
    if(err)
      return next(new Error(err));
    else if (groups == null)
      res.render('index', {title: 'Groups!', message:'No groups found'});
    else
      res.render('index', {title: 'Groups!',message:'Following groups available', groups: groups});
  })
});

// GET GROUP BASED ON ID
router.get('/:id', (req, res) => {
  Group.findOne({'slug':req.params.id}, (err, group) => {
    if(err)
      res.send(err);
    else if(group == null)
      res.send('group not found');
    else
      res.send(group.name);
  });
});

// CREATE NEW GROUP
router.post('/new', (req,res) => {
  Group.create({
    name: req.body.name,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    slug: slugify(req.body.city+' '+req.body.state+' '+req.body.country),
    _owner: req.body.owner,
    updated: Date(),
    created: Date()
  });
  res.send('Completed');
});
// End Routing Paths

// Export Router Functions
module.exports = router

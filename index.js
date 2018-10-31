// INCLUDE REQUIRED LIBRARIES
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// SETUP ROUTERS FOR USE
var groupRouter = require('./routes/group');
var userRouter = require('./routes/user');
var indexRouter = require('./routes/index')

// SETUP MONGODB CONNECTION
mongoose.connect('mongodb://localhost:27017/Groups', { useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

//SETUP PUG
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

// BODY PARSER CONFIG
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
// USE MEHOD OVERRIDE
app.use(methodOverride());

// COUNFIGURE ROUTERS
app.use('/group', groupRouter);
app.use('/user', userRouter);
app.use('/', indexRouter);
// STARTING NODE SERVER
app.listen(8080);
console.log('Groups! listening on port 8080')

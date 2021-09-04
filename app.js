const routes = require('./routes');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);

app.listen(port);
console.log('Server running at %d port', port);

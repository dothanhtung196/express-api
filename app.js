var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { handleNotFound, handleError } = require('./src/middlewares/error-handler-middleware');

var indexRouter = require('./src/routes/index-route');
var usersRouter = require('./src/routes/users-route');
var authenticationRoute = require('./src/routes/authentication-route');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'src/views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/authentication', authenticationRoute);

// catch 404 and forward to error handler
app.use(handleNotFound);

// error handler
app.use(handleError);

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const openApiSpecification = require('./src/helpers/swagger-configuration');
const { handleNotFound, handleError } = require('./src/middleware/error-handler-middleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpecification));

app.use('/', require('./src/routes/index-route'));
app.use('/users', require('./src/routes/users-route'));
app.use('/authentications', require('./src/routes/authentication-route'));
app.use('menu', require('./src/routes/menu-route'));

// catch 404 and forward to error handler
app.use(handleNotFound);

// error handler
app.use(handleError);

module.exports = app;
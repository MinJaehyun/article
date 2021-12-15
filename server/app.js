// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var toDoListRouter = require('./routes/toDoList');

var app = express();
const PORT = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todo', toDoListRouter);

// app.listen
app.listen(PORT, () => {
  console.log(`connected server PORT is: ${PORT}`);
})

module.exports = app;

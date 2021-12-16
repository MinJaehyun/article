const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const toDoListRouter = require('./routes/toDoList');

const app = express();
const PORT = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todo', toDoListRouter);

// test
app.get('/', (req, res) => {
  res.send("run!")
})

// app.listen
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})

module.exports = app;

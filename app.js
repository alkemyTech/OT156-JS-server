const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const categoriesRouter = require('./routes/categories');
const organizationRouter = require('./routes/organization');
const loginRouter = require('./routes/login');
const backofficeRouter = require('./routes/backoffice');
const newsRouter = require('./routes/news');
const activitiesRouter = require('./routes/activities');
const adminRouter = require('./routes/admin');
const membersRouter = require('./routes/members')
const testimonialRouter = require('./routes/testimonials');


const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/categories', categoriesRouter);
app.use('/organizations', organizationRouter);
app.use('/auth', loginRouter);
app.use('/backoffice', backofficeRouter);
app.use('/news', newsRouter);
app.use('/activities', activitiesRouter);
app.use('/admin', adminRouter);
app.use('/members', membersRouter);
app.use('/testimonials', testimonialRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

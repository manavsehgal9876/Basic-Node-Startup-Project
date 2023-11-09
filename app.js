require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

const { checkUser } = require('./app/Middleware/AuthMiddleware');
const {
  SetCurrentUrlAndPaginationData,
} = require('./app/Middleware/SetCurrentUrlAndPaginationData');
var app = express();

const adminAuthRoutes = require('./routes/admin/auth');
const adminCustomerRoutes = require('./routes/admin/customer');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(checkUser);
app.use(SetCurrentUrlAndPaginationData);

app.use('/admin', [adminAuthRoutes, adminCustomerRoutes]);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({
    message: 'Page not found',
  });
});

module.exports = app;

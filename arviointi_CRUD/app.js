var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bookRouter = require('./routes/book');
const borrowerRouter = require('./routes/borrower');
const arviointiRouter = require('./routes/arviointi');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);
app.use('/arviointi', arviointiRouter);

module.exports = app;

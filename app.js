var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); // added during scaffolding

var indexRouter = require('./routes/index');
// access enviro_data routes
const enviroDataRouter = require("./routes/enviro_data.js") 
// access indicator_details routes
const indicatorDetailsRouter = require("./routes/indicator_details.js")

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// connect to enviro_data routes
app.use('/enviro_data', enviroDataRouter);
// connect to indicator_details routes
app.use('/indicator_details', indicatorDetailsRouter);

// Anything that doesn't match the above, send back index.html
// build folder will be auto-generated when we npm build (package.json)
app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send({ msg: "Error" });
  });

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
const enviroDataRouter = require("./routes/enviro_data.js")
// later: add indicators

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/enviro_data', enviroDataRouter);
// later: add indicators

/* BELOW COPIED FROM MILESTONE APP.JS FILE, need to understand */

// Anything that doesn't match the above, send back index.html
// QUESTION: can't find "build" directory in "client" in the original project - what is this pointing to? should I point it somewhere else?
// build folder auto-generated when we npm build (package.json)
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

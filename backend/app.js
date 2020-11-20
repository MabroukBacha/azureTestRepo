const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// enable CORS
app.use(cors());

// Require routes
const greetingRouter = require('./routes/greeting');

// using as middleware
app.use('/greeting', greetingRouter);
module.exports = app;


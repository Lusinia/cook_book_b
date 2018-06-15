const express = require('express');
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = require('./utils/constants').PORT;
const keys = require("./config/keys");
const seedDB      = require("./seeds");


// Mongo connection
const mongoDB =  keys.mongoURI;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('X-HTTP-Method-Override', 'DELETE');
  res.header('X-HTTP-Method-Override', 'PUT');
  next();
});

seedDB();
// Our routes
const recipes = require('./routes/recipe');

app.use('/recipes', recipes);

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});
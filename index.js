const express = require('express');
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = require('./utils/constants').PORT;
const keys = require("./config/keys");
const seedDB = require("./seeds");
const passport    = require("passport");
const LocalStrategy = require("passport-local");
const session =require("express-session");
const User = require('./models/User');


// Mongo connection
const mongoDB = keys.mongoURI;

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

seedDB();

// PASSPORT CONFIGURATION
app.use(session({
  secret: "My super secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('X-HTTP-Method-Override', 'DELETE');
  res.header('X-HTTP-Method-Override', 'PUT');
  res.header('X-HTTP-Method-Override', 'PATCH');

  res.locals.currentUser = req.user;
  next();
});

// Our routes
const recipes = require('./routes/recipe');
const auth = require('./routes/auth');

app.use('/', auth);
app.use('/recipes', recipes);

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});
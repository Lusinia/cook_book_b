const User = require('../models/User');
const passport = require('passport');


module.exports = {
  register: (req, res) => {
    try {
      const { username, password } = req.body;
      User.findOne({ username }, (err, user) => {
        if (err) {
          return res.send('Find user error');
        }
        if (user) {
          return res.send('User is exists');
        } else {
          const newUser = new User({ username });
          User.register(newUser, password, (err, user) => {
            if (err) {
              return res.send('Register user error');
            }
            passport.authenticate('local')(req, res, () => {
              res.json({
                message: 'New user was created successfully',
                token: user._id
              });
            });
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  },
  login: (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        res.json({
          message: 'User successfully logged in',
          token: user._id });
      }
    );
  },
  logout: (req, res) => {
    req.logout();
    res.send('User is logged out')
  },
  user: (req, res) => {
    User.findById(req.body.token, (err, user) => {
      if (err) {
        return res.send('Search user error');
      }
      res.json({ user });
    });
  },
};


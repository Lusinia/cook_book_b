const User = require('../models/User');
const passport = require('passport');


module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      try {
        const user = await User.findOne({ username });
        if (user) {
          return res.send('User is exists');
        } else {
          const newUser = new User({ username });
          try {
            const result = await User.register(newUser, password);
            passport.authenticate('local')(req, res, () => {
              res.json({
                message: 'New user was created successfully',
                token: result._id
              });
            });
          } catch (err) {
            return res.send('Register user error');
          }
        }
      } catch (err) {
        return res.send('Find user error');
      }
    } catch (err) {
      console.error(err);
    }
  },
  login: async (req, res) => {
    try {
      const user = await  User.findOne({ username: req.body.username });
      res.json({
        message: 'User successfully logged in',
        token: user._id
      });
    } catch (err) {
      res.send('Login user error');
    }
  },
  logout: (req, res) => {
    req.logout();
    res.send('User is logged out');
  },
  user: async (req, res) => {
    try {
      const user = await User.findById(req.body.token);
      res.json({ user });
    } catch (err) {
      res.send('Search user error');
    }
  },
};


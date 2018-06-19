const express = require('express');
const router = express.Router();
const passport = require('passport');

const authController = require('../controllers/auth');

//Index route
router.post('/register', authController.register);
router.post('/login',  passport.authenticate('local'), authController.login);
router.get('/logout', authController.logout);
router.post('/user',   authController.user);

module.exports = router;








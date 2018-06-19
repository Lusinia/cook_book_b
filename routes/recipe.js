const express = require('express');
const router = express.Router();
const passport = require('passport');


const recipeController = require('../controllers/recipes');

//Index route
router.get('/' , recipeController.get);
router.post('/' , recipeController.create);
router.get('/:id' , recipeController.details);
router.put('/:id' , recipeController.update);
router.patch('/:id' , recipeController.updateRating); // passport.authenticate('local'),
router.delete('/:id' , recipeController.delete);

module.exports = router;





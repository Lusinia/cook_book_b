const express = require('express');
const router = express.Router();


const recipeController = require('../controllers/recipes');

//Index route
router.get('/' , recipeController.get);
router.post('/' , recipeController.create);
router.get('/:id' , recipeController.details);
router.patch('/:id' , recipeController.update);
router.delete('/:id' , recipeController.delete);

module.exports = router;

// // Create route
// router.post('/recipes', (req: Request, res: Response) => {
//     res.send('Got a POST request');
// });

//
// // Delete  route
// router.delete('/recipes/:id', (req: Request, res: Response) => {
//     const index = req.query.index;
//
//     res.send('delete request');
// });






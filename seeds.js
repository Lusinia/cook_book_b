const Recipe = require('./models/Recipe');
const category = require('./utils/constants').SEEDS.CATEGORY;
const ingredient = require('./utils/constants').SEEDS.INGREDIENT;
const createError = require('http-errors');

const data = [
  {
    name: 'Chicken Salad with Bacon, Lettuce, and Tomato',
    imageURL: 'https://images.media-allrecipes.com/userphotos/560x315/786271.jpg',
    ingredients: [ingredient.TOMATO, ingredient.MEAT],
    category: category.SALAD,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    name: 'Chicken Club Pasta Salad',
    imageURL: 'https://images.media-allrecipes.com/userphotos/560x315/1113624.jpg',
    ingredients: [ingredient.SPAGETTI, ingredient.CHICKEN],
    category: category.DISHES,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    name: 'Caribbean Chicken with Pineapple-Cilantro Rice',
    imageURL: 'https://images.media-allrecipes.com/userphotos/560x315/690452.jpg',
    ingredients: [ingredient.RICE, ingredient.CREAM, ingredient.TOMATO],
    category: category.DISHES,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  }
];

function seedDB() {
  Recipe.remove({}, function (err) {
    if (err) {
      createError('404', err);
    }
    data.forEach(function (seed) {
      Recipe.create(seed, function (err) {
        if (err) {
          createError('404', err);
        }
      });
    });
  });
}

module.exports = seedDB;
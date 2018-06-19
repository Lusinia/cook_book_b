const Recipe = require('./models/Recipe');
const createError = require('http-errors');
const data = require('./utils/fixtures/seedData');


const  seedDB = () => {

  Recipe.remove({},  err => {
    if (err) {
      createError('404', err);
    }
    data.forEach(seed => {
      Recipe.create(seed, err => {
        if (err) {
          createError('404', err);
        }
      });
    });
  });
};

module.exports = seedDB;
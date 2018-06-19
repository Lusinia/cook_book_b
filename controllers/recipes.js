const Recipe = require('../models/Recipe');

module.exports = {
  get: async (req, res, next) => {
    try {
      const recipes = await Recipe.find({});
      res.json(recipes);
    } catch (err) {
      return next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const rec = await Recipe.find({
        name: req.body.name,
        imageURL: req.body.imageURL
      });
      if (rec.length) {
        res.send('This recipe is already exist.');
      } else {
        const { name, description, imageURL, ingredients, categories, steps, time, author, rating } = req.body;
        const recipe = new Recipe(
          {
            name,
            description,
            date: new Date().toDateString(),
            imageURL,
            ingredients,
            categories,
            steps,
            author,
            rating,
            time,
          }
        );

        recipe.save(err => {
          if (err) {
            return next(err);
          }
          res.send('Recipe Created successfully');
        });
      }
    } catch (err) {
      return next(err);
    }
  },
  details: async (req, res, next) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      res.send(recipe);
    } catch (err) {
      return next(err);
    }
  },
  update: (req, res, next) => {
    Recipe.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
      if (err) {
        return next(err);
      }
      res.send('Recipe udpated.');
    });
  },
  updateRating: async (req, res, next) => {
    try {
      const recipe = await  Recipe.findById(req.params.id);
      if (recipe) {
        const { rating } = recipe;
        const { count, value, usersId } = rating;

        if (!usersId.includes(req.body.usersId)) {
          const newCount = count + 1;
          const result = (n) => (count * value + n) / (newCount);
          const newRating = {
            rating: {
              count: newCount,
              value: result(req.body.value),
              usersId: [...usersId, req.body.usersId]
            }
          };
          const newValue = Object.assign(recipe, newRating);
          try {
            await Recipe.findByIdAndUpdate(req.params.id, { $set: newValue });
            res.json(newValue.rating);
          } catch (err) {
            return next(err);
          }
        } else {
          res.send('Recipe not found.');
        }
      }
    } catch (err) {
      return next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      await Recipe.findByIdAndRemove(req.params.id);
      res.send('Deleted successfully!');
    } catch (err) {
      return next(err);
    }
  }
};

const Recipe = require('../models/Recipe');

module.exports = {
  get: (req, res, next) => {
    Recipe.find({}, (err, recipes) => {
      if (err) {
        return next(err);
      }
      res.json(recipes);
    });
  },
  create: (req, res, next) => {
    Recipe.find({
      name: req.body.name,
      imageURL: req.body.imageURL
    }, (err, rec) => {
      if (err) {
        return next(err);
      }
      if (rec.length) {
        res.send('This recipe is already exist.');
      } else {
        const { name, description, imageURL, ingredients, category, steps } = req.body;
        const recipe = new Recipe(
          {
            name,
            description,
            date: new Date().toDateString(),
            imageURL,
            ingredients,
            category,
            steps,
          }
        );
        recipe.save(err => {
          if (err) {
            return next(err);
          }
          res.send('Recipe Created successfully');
        });
      }
    });
  },
  details: (req, res, next) => {
    Recipe.findById(req.params.id, (err, recipe) => {
      if (err) {
        return next(err);
      }
      res.send(recipe);
    });
  },
  update: (req, res, next) => {
    Recipe.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
      if (err) {
        return next(err);
      }
      res.send('Recipe udpated.');
    });
  },
  updateRating: (req, res, next) => {
    Recipe.findById(req.params.id, (err, recipe) => {
      if (err) return next(err);
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
          Recipe.findByIdAndUpdate(req.params.id, { $set: newValue }, err => {
            if (err) {
              return next(err);
            }
            res.json(newValue.rating);
          });

        } else {
          console.log('else');
        }
      }

    });
  },
  delete: (req, res, next) => {
    Recipe.findByIdAndRemove(req.params.id, err => {
      if (err) return next(err);
      res.send('Deleted successfully!');
    });
  }
};

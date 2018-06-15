const Recipe = require('../models/Recipe');

module.exports = {
  get: function (req, res, next) {
    Recipe.find({}, function (err, recipes) {
      if (err) return next(err);
      res.json(recipes);
    });
  },
  create: function (req, res, next) {
    const recipe = new Recipe(
      {
        name: req.body.name,
        description: req.body.name,
        imageURL: req.body.imageURL
      }
    );

    recipe.save(function (err) {
      if (err) {
        return next(err);
      }
      res.send('Recipe Created successfully');

    });
  },
  details: function (req, res, next) {
    Recipe.findById(req.params.id, function (err, recipe) {
      if (err) return next(err);
      res.send(recipe);
    });
  },
  update: function (req, res, next) {
    Recipe.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
      if (err) return next(err);
      res.send('Recipe udpated.');
    });
  } ,
  delete: function (req, res, next) {
    Recipe.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
    });
  }
};

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: String,
  // author: {
  //   id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User'
  //   },
  //   username: String
  // },
  name: { type: String, required: true, max: 20 },
  ingredients: Array,
  categories: Array,
  date: Date,
  description: { type: String, required: true, max: 300 },
  steps: Array,
  time: Number,
  imageURL: String,
  rating: {
    count: Number,
    value: Number,
    usersId: Array
  }
});


module.exports = mongoose.model('Recipe', recipeSchema);

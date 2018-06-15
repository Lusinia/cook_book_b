// import { DATE_FORMAT } from '../utils/constants';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: { type: String },
  name: { type: String, required: true, max: 20 },
  ingredients: { type: Array },
  category: { type: String },
  description: { type: String, required: true, max: 300 },
  imageURL: String
});


module.exports = mongoose.model('Recipe', recipeSchema);
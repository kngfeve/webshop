var mongoose = require('mongoose');

var DataSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: { type: Number, min: 0},
  stock: { type: Number, min: 0},
  description: String,
  skillbonus: String,
  rolebonus: String,
  type: String,
  faction: String,
  metalevel: { type: Number, min: 0}   
});

mongoose.model('Data', DataSchema);

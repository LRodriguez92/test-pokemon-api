const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// initialize the schema with a configuration object
const pokemonSchema = new Schema({
  // firstName and lastNameare our properties
  name: String,
  image: String,
  pokemonType: String
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
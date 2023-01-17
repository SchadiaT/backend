// Importation de mongoose
const mongoose = require('mongoose');

// Création d'un schèma mangoose par la base de données MongoDB
const sauceSchema = mongoose.Schema({

  userId: { type: String, required: true },

  name: { type: String, required: true },

  manufacturer: { type: String, required: true },

  description: { type: String, required: true },

  mainPepper: { type: String, require: true },

  imageUrl: { type: String, required: true },

  heat: { type: Number, required: true },

  likes: { type: Number },

  dislikes: { type: Number },

  usersLiked: { type: [String] },

  usersDisliked: { type: [String] },
});

//exportation du schèma de données afin d'intéragir avec l'application
module.exports = mongoose.model('Sauce', sauceSchema);
//Importation des modules npm
const express = require('express');

//Importation de mongoose pour utilisatio de la base de données
const mongoose = require('mongoose');

//Gestion de la demande POST provenant du front-end
const bodyParser = require('body-parser');

const saucesRoutes = require('./routes/sauces');

const userRoutes = require('./routes/user');

const path = require('path');

mongoose.connect('mongodb+srv://piquante:1234@cluster0.g1evlt1.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log(err));


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());
  app.use(express.json());
  
  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/api/sauces', saucesRoutes);
  app.use('/api/auth', userRoutes);

module.exports = app;
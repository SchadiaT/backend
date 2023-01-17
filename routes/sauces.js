const express = require('express');
const router = express.Router();

//Importation des controllers de sauce crée
const sauceCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');
const multer = require ('../middleware/multer-config');





router.post('/', auth, multer, sauceCtrl.createSauce);
   
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
 
router.delete('/:id', auth, sauceCtrl.deleteSauce);
 
router.get('/:id', auth, sauceCtrl.getOneSauce);
 
router.get('/', auth, sauceCtrl.getAllSauce);

router.post('/:id/like',auth, sauceCtrl.likeDislike);

module.exports = router;
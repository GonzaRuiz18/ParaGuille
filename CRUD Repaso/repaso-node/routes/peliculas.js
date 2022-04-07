var express = require('express');
const Pelicula = require('../database/models/Pelicula');
var router = express.Router();
var peliculasController=require('../controllers/peliculasController')

// Creación

router.get('/crear',peliculasController.crear)

module.exports = router;

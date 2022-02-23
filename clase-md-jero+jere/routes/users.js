const express=require('express');
const router = express.Router();
const controller = require('../controllers/users')



router.get('/register',controller.register);

router.post('/',controller.storeUser);

router.get('/login',controller.login);

router.post('/login',controller.proccessLogin);

module.exports= router;

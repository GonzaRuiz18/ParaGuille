var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/login',usersController.login);

router.get('/profile',usersController.profile);

router.get('changePassword',usersController.changePassword);

router.get('/adminInfoUsersC',usersController.adminInfoUsersC);

router.get('/adminRegisterUsersC',usersController.adminRegisterUsersC)

router.get('/adminChangeInfo',usersController.adminChangeInfo)


module.exports = router;

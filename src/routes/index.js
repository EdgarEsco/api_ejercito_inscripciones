const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const infoController =  require('../controllers/info');

router.get('/', (req, res) => {
 res.send("API PARA INSCRIPCIONES DE ALUMNOS AL EJERCITO AL EJERCITO");
});
router.post('/api/login', usersController.login);
router.post('/api/signin', usersController.addUser);
router.get('/api/info', infoController.getInfo);
router.get('/api/info/:matricula', infoController.getInfoByName);
router.post('/api/info', infoController.addInfo);


module.exports = router;
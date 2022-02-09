const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', (req, res) => {
 res.send("API PARA INSCRIPCIONES DE ALUMNOS AL EJERCITO AL EJERCITO");
});
router.post('/login', usersController.login);
router.post('/signin', usersController.addUser);

module.exports = router;
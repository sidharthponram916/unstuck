const userController = require('../controllers/user.controller.js'); 

const { Router } = require('express'); 
const router = Router(); 

router.post('/create', userController.createUser); 

router.get('/find/:id', userController.findUser); 

module.exports = router; 
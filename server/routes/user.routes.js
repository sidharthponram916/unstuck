const userController = require('../controllers/user.controller.js'); 

const { Router } = require('express'); 
const router = Router(); 

const verify = require('../middleware/verify.js'); 

router.post('/create', userController.createUser);
router.post('/authorize', userController.authenticateUser); 

//Secure routes 
     router.use(verify); 

router.get('/find/:id', userController.findUser); 

module.exports = router; 
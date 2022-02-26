const { Router } = require('express'); 
const router = Router(); 

const questionController = require('../controllers/question.controller.js'); 

const verify = require('../middleware/verify.js'); 
router.use(verify); 

router.post('/create', questionController.createQuestion); 

router.get('/all', questionController.getAllQuestions); 
router.get('/find/:id', questionController.findQuestionById);

module.exports = router; 
const { Router } = require('express'); 
const router = Router(); 

const verify = require('../middleware/verify'); 

router.use(verify); 

const commentController = require('../controllers/comment.controller'); 

router.post('/create', commentController.createComment); 

router.get('/all', commentController.getAllComments);

router.delete('/delete/:id', commentController.deleteComment); 

router.put('/update/:id', commentController.updateComment);

module.exports = router; 
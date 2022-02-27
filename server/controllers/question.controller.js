const Question = require('../models/Question.js'); 

module.exports = { 
     async createQuestion(req, res) { 
         try { 
             const question = await Question.create(req.body); 
             res.status(200).json(question); 
         }
         catch (e) { 
                res.status(500).json({ error: e.message});
         }
     },
     async getAllQuestions(req, res) { 
         try { 
             const questions = await Question.find(); 
             res.status(200).json(questions); 
         }
         catch (e) { 
             res.status(500).json({ error: e.message})
         }
     }, 
     async findQuestionById(req, res) { 
         try { 
             const question = await Question.findById(req.params.id); 

             if (!question) return res.status(404).json("We are sorry, we could not find that question!"); 

             res.status(200).json(question); 
         }
         catch (e) { 
             res.status(500).json({ error: e.message})
         }
     }, 
}
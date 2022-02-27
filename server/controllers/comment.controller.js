const Comment = require('../models/Comment.js'); 


module.exports = { 
     async createComment(req, res) { 
         try { 
             const comment = await Comment.create(req.body); 

             res.status(200).json(comment); 
         }
         catch (e) { 
             res.status(500).json({ error: e.message})
         }
     }, 
     async getAllComments(req, res) { 
         try { 
              const comments = await Comment.find()

              res.status(200).json(comments); 
         }
         catch (e) { 
             res.status(500).json({ error: e.message}); 
         }
     }, 
     async deleteComment(req, res) { 
         try { 
              const comment = await Comment.findByIdAndDelete(req.params.id); 

              res.status(200).json({ status: "Deleted Successfully"}); 
         }
         catch (e) { 
             res.status(500).json({ error: e.message }); 
         }
     }, 
     async updateComment(req, res) { 
        try { 
             const comment = await Comment.findByIdAndUpdate(req.params.id, req.body); 

             res.status(200).json(comment); 
        }
        catch (e) { 
            res.status(500).json({ error: e.message}); 
        }
     }
}
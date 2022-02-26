const User = require('../models/User.js'); 

const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 

module.exports = { 
    async createUser(req, res) {
      try { 
         req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT)); 
         let user = await User.create(req.body);

        const response = { 
            token: jwt.sign({user}, process.env.JWTKEY), 
            user
        }

         res.status(200).json(response); 
         console.log(response); 
      }
      catch (e) { 
         res.status(500).json(e.message); 
         console.log(e.message);
      }
    }, 
    async findUser(req, res) { 
         try { 
              const user = await User.findById(req.params.id); 

              res.status(200).json(user); 
         }
         catch (e) { 
             console.log(e.message); 
             res.status(500).json({ error: e.message}); 
         }
    }
}
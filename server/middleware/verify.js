const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verify = (req,res,next) => { 
   const token = req.headers.authorization;
   if (!token) return res.status(500).json({"message": "Access Denied"});

   jwt.verify(token, process.env.JWTKEY, async (e, data) => { 
       try { 
        if (e) return res.json({error: e.message});

        let user = await User.findById(data.user._id); 
            req.user = user; 
            
            next();
       }
       catch (e) { 
           res.json({error: e.message});
       }
   })
}

module.exports = verify; 
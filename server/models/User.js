const { model, Schema } = require('mongoose'); 

const userSchema = new Schema({ 
       email: { 
           type: String, 
           required: true,
           unique: true
       }, 
       displayName: { 
           type: String, 
           required: true, 
           unique: true
       },
       password: { 
           type: String, 
           required: true, 
       }, 
       subjects: { 
          type: Array, 
          required: true, 
          default: [], 
       }, 
       createdAt: { 
           type: Date, 
           default: new Date()
       }
})



module.exports = model('users', userSchema);    
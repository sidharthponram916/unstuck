const { Schema, model } = require('mongoose'); 

const questionSchema = new Schema({ 
      username: { 
          type: String, 
          required: true
      }, 
      user_id: { 
          type: String, 
          required: true, 
      }, 
      subjects: { 
          type: Array, 
          required: true, 
          default: []
      },
      question: { 
          type: String, 
          required: true,
      },
      description: { 
          type: String,
          required: true,
      },
      comments: { 
          type: Array, 
          default: []
      },
      upvotes: { 
          type: Number, 
          default: 0
      }, 
      createdAt: { 
          type: Date, 
          default: new Date()
      }
})

module.exports = model("questions", questionSchema);
const { Schema, model } = require('mongoose'); 


const commentSchema = new Schema({ 
    username: { 
        type: String,
        required: true
    }, 
    post_id: { 
        type: String, 
        reqired: true, 
    }, 
    comment: { 
        type: String, 
        required: true, 
    },
    priority: { 
        type: Boolean, 
        default: false,
    },
    createdAt: { 
        type: Date, 
        default: new Date()
    }
})

module.exports = model('comments', commentSchema); 
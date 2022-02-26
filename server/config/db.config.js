const mongoose = require('mongoose'); 

const runs = async () => { 
   try { 
      await mongoose.connect(process.env.DB_URI, { 
           useNewUrlParser: true, 
           useUnifiedTopology: true
      })
      console.log('MongoDB running perfectly!'); 
   }
   catch (e) { 
      console.log(e.message); 
   }
}

module.exports = runs; 
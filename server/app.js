require('dotenv').config(); 

const express = require('express'); 
const dbruns = require('./config/db.config.js');
const app = express();
const port = process.env.PORT || 2022;  

app.use(require('cors')()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true})); 

dbruns(); 

app.use('/api/auth', require('./routes/user.routes.js')); 

app.listen(port, () => { 
      console.log(`UnStuck App is up and running on PORT: ` + port); 
});        
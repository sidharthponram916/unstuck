const express = require('express'); 
const app = express();
const port = process.env.PORT || 2022;  


app.listen(port, () => { 
      console.log(`EduNotifs App is up and running on PORT: ` + port); 
}); 
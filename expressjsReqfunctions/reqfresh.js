
let cookieParser = require('cookie-parser');
let express = require('express');
let app = express(); 
let PORT = 5000;
  
app.get('/',(req,res)=>{
    console.log(req.fresh);
    res.send();
})
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
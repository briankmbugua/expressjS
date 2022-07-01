
let express = require('express');
let app = express(); 
let PORT = 5000;
  
app.get('/',(req,res)=>{
    //before res.end('ok)
    console.log(res.headersSent);
    res.end('OK')
})
app.get('/home',(req,res)=>{
    //after res.end('ok)
    res.end('OK')
    console.log(res.headersSent);
})
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
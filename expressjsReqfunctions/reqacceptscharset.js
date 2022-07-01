let express = require('express');
let app = express(); 
let PORT = 5000;
  
app.get('/',(req,res)=>{
    console.log(req.get('Accept-Charset'));
    // console.log(req.acceptsCharsets('UTF-8'));
    console.log(req.acceptsCharsets('ISO-8859-1'));
    res.end()
})
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
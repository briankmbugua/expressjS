let express = require('express');
let app = express(); 
let PORT = 5000;

//without middleware
app.get('/',(req,res)=>{
    res.attachment('hello.txt')
   console.log(res.get('Content-Disposition')); 
   res.end()
})

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
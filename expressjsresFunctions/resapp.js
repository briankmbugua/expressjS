
let express = require('express');
let app = express(); 
let PORT = 5000;
  
app.get('/',(req,res)=>{
console.log(res.app.get('views'))
res.end();
})

app.get('/getApp', function (req, res) {
  
    // Holds the reference to the 
    // instance of the Express 
    // application
    console.log(res.app);
    res.end();
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
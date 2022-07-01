
let express = require('express');
let app = express(); 
let PORT = 5000;



app.get('/',(req,res)=>{
    res.cookie('Name','KINYANJUI')
    res.clearCookie('Name')
    console.log('cookie cleared');
})

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
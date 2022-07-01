
let express = require('express');
let app = express(); 
let PORT = 5000;



app.use('/',(req,res,next)=>{
    res.cookie('Name','MBUGUA')
    res.send('cookie set')
    next()
})


// app.get('/',(req,res)=>{
//     // res.cookie('name', "brian")
//     // res.send('cookie set')
//     console.log('Cookie SET')
// })

app.get('/', function(req, res){
    console.log('Cookie SET');
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
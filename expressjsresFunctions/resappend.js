
let express = require('express');
let app = express(); 
let PORT = 5000;
//without middleware 
// app.get('/',(req,res)=>{
//     res.append('Warning','201 Warning')
//     console.log('Warning');
//     res.end()
// })

//with middleware

app.use('/',(req,res,next)=>{
    res.append('Warning',"201 it's a warning")
    next()
})

app.get('/',(req,res)=>{
    console.log(res.get('Warning'));
    res.send()
})

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
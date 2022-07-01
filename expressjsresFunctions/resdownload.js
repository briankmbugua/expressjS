let express = require('express');
let app = express(); 
let PORT = 5000;

//without error
// app.get('/',(req,res)=>{
//     res.download('text.txt')
// })

app.get('/',(req,res)=>{
    res.download('unkn.txt',(err)=>{
        console.log(`Error ${err}`);
    })
})


app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
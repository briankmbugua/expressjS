let express = require('express');
let app = express(); 
let PORT = 5000;
 
app.get('/',(req,res)=>{
    res.locals.user = "BRIAN"
    res.locals.age = 30;
    res.locals.sex = "MALE"
    console.log(res.locals);
    res.end()
})

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
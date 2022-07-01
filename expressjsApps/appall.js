let express = require('express');
let app = express()

app.all('/user',(req,res,next)=>{
    console.log('user API called');
    next();
})
let PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`servet listening on port ${PORT}`);
})

let express = require('express');
let app = express(); 
let router = express.Router()
let PORT = 5000;



//setting single router

router.all('/user',(req,res)=>{
    console.log('user name called');
    console.log(req.method)
    res.end()
})

//multiple routes

router.all('/student',(req,res)=>{
    console.log('student called');
    res.end()
})

router.all('/teacher',(req,res)=>{
    console.log('teacher called');
    res.end()
})
router.all('/admin',(req,res)=>{
    console.log('admin called');
    res.end()
})

app.use(router)

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
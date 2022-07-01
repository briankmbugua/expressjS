
let express = require('express');
let app = express(); 
let router = express.Router()
let PORT = 5000;

//single route
router.get('/user', (req, res, next) =>{
    console.log("GET request called");
    res.end();
});

//multiple routes

router.post('/user',(req,res,next)=>{
    console.log('POST request called');
    res.end()
})

router.delete('/user',(req,res,next)=>{
    console.log('DELETE request called');
    res.end()
})

router.put('/user',(req,res,next)=>{
    console.log('PUT request called');
    res.end()
})


app.use(router)

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
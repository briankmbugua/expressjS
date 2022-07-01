let express = require('express');
let app = express(); 
let router = express.Router()
let PORT = 5000;


//All requests to this router will first hit this middleware
router.use((req,res,next)=>{
    console.log('middleware called');
    next()
})
//always invoked
router.use((req,res,next)=>{
    res.send('this will be seen on the browser')
})

app.use('/user',router)

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
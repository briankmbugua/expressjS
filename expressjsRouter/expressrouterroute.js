let express = require('express');
let app = express(); 
let router = express.Router()
let PORT = 5000;

router.route('/user')
.get((req,res,next)=>{
    console.log('GET request called');
    res.end()
})
.post((req,res,next)=>{
    console.log('POST request called');
    res.end()
})
.put((req,res,next)=>{
    console.log('PUT request called');
    res.end()
})


app.use(router)

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
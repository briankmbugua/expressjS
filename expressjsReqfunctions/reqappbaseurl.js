let express = require('express');
let app = express()
let PORT = 5000;

let user = express.Router()

user.get('/login',(req,res)=>{
    console.log(req.baseUrl);
    res.end()
})
app.use('/user', user)
app.listen(PORT, (err)=>{
    if(err) console.log(err)
    console.log(`Listening on port ${PORT}`)

})
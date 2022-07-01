let express = require('express');

let path = require('path');
let PORT = 5000;
let app = express()//main app
// let user = express()//sub app

// user.get('/',(req,res)=>{
//     console.log(user.mountpath)
//     res.send('user homepage')
// })
// app.use('/user', user)//mounting the sub app

app.get('/',(req,res)=>{
    console.log(app.mountpath)
    res.send('ok')
})



app.listen(PORT, ()=>{
    console.log(`servet listening on port ${PORT}`);
})
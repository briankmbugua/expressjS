let express = require('express');
let app = express()
let PORT = 5000;

//for parsing express/json
app.use(express.json())

//For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

app.post('/profile',(req,res)=>{
    let data = req.body;
    console.log(`Name: ${data.name}`)
    console.log(`Name: ${data.age}`)
    console.log(`Name: ${data.job}`)
    res.send()
})

app.listen(PORT, (err)=>{
    if(err) console.log(err)
    console.log(`Listening on port ${PORT}`)

})
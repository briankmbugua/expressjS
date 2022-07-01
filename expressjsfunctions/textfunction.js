let express = require('express');

let path = require('path');

let app = express()

let PORT = 5000;

app.use(express.text())
app.post('/', (req,res)=>{
    console.log(req.body)
    res.end()
})

app.listen(PORT, ()=>{
    console.log(`servet listening on port ${PORT}`);
})
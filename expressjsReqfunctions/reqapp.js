let express = require('express');
let app = express()
let PORT = 5000;
app.get('/',(req,res)=>{
    console.log(req.app)
    console.log(req.app._eventsCount);
    res.send()
})

app.listen(PORT, (err)=>{
    if(err) console.log(err)
    console.log(`Listening on port ${PORT}`)

})
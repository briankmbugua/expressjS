let express = require('express');
let app = express()

app.delete('/user',(req,res,next)=>{
    res.send('DELETE request sent')
})
let PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`servet listening on port ${PORT}`);
})
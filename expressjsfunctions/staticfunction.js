let express = require('express');

let path = require('path');

let app = express()

let PORT = 5000;

app.use(express.static(path.join(__dirname, 'views')))
// console.log(app.use(express.static(path.join(__dirname, 'views'))));
app.get('/', (req,res)=>{
    res.render('index.ejs')
})

app.listen(PORT, ()=>{
    console.log(`servet listening on port ${PORT}`);
})
let express = require('express');
let app = express(); 
let PORT = 5000;

const userRoutes = require('./route')

app.use('/', userRoutes)

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
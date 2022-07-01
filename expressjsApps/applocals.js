let express = require('express');

let path = require('path');

let app = express()

let PORT = 5000;

app.locals.email = "briankmbuguak@gmail.com"
app.locals.age = "26"
app.locals.company = "my company"

console.log(app.locals);

app.listen(PORT, ()=>{
    console.log(`servet listening on port ${PORT}`);
})
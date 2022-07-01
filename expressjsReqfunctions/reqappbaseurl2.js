let express = require('express');
let app = express()
let PORT = 5000;

let student = express.Router()
let teacher = express.Router()


app.use('/teacher', teacher)
app.use('/student', student);

teacher.get('/signup', function (req, res) {
    if(req.baseUrl == '/teacher')
    {
        console.log("Show Singup Form for teacher");
        res.end();
    } else {
        console.log("Invalid Request")
        res.send("Invalid Route")
    } 
})
  
student.get('/signup', function (req, res) {
    if(req.baseUrl == '/student')
    {
        console.log("Show Singup Form");
        res.end();
    } else {
        console.log("Invalid Request")
        res.send("Invalid Route")
    } 
})


app.listen(PORT, (err)=>{
    if(err) console.log(err)
    console.log(`Listening on port ${PORT}`)

})
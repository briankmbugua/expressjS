let express = require('express');
let app = express()//main
let admin = express()
let teacher = express()
let student = express()

admin.on('mount',()=>{
    console.log('admin mounted');
})

teacher.on('mount',()=>{
    console.log('teacher mounted')
})

student.on('mount',()=>{
    console.log('student mounted');
})

admin.get('/',(req,res)=>{
    res.send('admin homepage')
})
app.use('/student',student)
app.use('/teacher',teacher)
app.use('/admin',admin)
let PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`servet listening on port ${PORT}`);
})
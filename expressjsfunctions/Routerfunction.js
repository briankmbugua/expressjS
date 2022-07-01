let express = require('express');
const path = require('path');

const app = express();

const PORT = 5000


// app.get('/',(req,res)=>{
//     res.send('Welcome to my express tutorial');
// });

// app.use(express.json());//using express.json() middleware

// app.post("/", (req,res)=>{
//     const {name} = req.body;
//     res.send(`Welcome ${name}`)
// })

// app.use('/static', express.static(path.join(__dirname, 'Static_files')))

// app.get('/file',(req,res)=>{
//     res.sendFile(path.join(__dirname,'Static_files/random.css'));
// })

// app.use(express.raw())

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     res.end();
// })

//single routing
let router = express.Router();

//multiple routing

let router1 = express.Router();
let router2 = express.Router();
let router3 = express.Router();

router.get('/',(req,res,next)=>{
    console.log('Router working')
    res.end()
})

router1.get('/user',(req,res,next)=>{
    console.log('User Router working')
    res.end()
})

router2.get('/admin',(req,res,next)=>{
    console.log('Admin Router working')
    res.end()
})

router3.get('/student',(req,res,next)=>{
    console.log('Student Router working')
    res.end()
})

app.use(router);
app.use(router1);
app.use(router2);
app.use(router3);

app.listen(PORT,(error)=>{
    if(!error)
        console.log(`server started succesfully on port ${PORT}`);
         else 
        console.log('Error occured server cannot start' + error);
})
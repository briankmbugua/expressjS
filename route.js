let express = require('express')
let router = express.Router()

router.param("userId",(req,res,next,id)=>{
    console.log('this function will be called first');
    next()
})

router.get('/user/:userId',(req,res)=>{
    console.log('then this function will be called');
    res.end()
})

module.exports = router

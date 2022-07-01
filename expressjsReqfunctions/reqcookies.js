let cookieParser = require('cookie-parser');
let express = require('express');
let app = express(); 
let PORT = 5000;
  
app.use(cookieParser());
  
app.get('/user', function (req, res) {
  req.cookies.title='BRIANMBUGUA';  
  req.cookies.age = 30;
  console.log(req.cookies);
  res.send();
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
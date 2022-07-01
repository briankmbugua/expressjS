let express = require('express');
let app = express()
console.log(app.enabled('trust proxy'))
app.enable('trust proxy')
console.log(app.enabled('trust proxy'));
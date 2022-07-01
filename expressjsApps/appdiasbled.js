let express = require('express');
let app = express()
 console.log( app.disabled('trust proxy'));
 app.enable('trust proxy')
 console.log( app.disabled('trust proxy'));
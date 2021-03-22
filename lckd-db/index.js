const express = require("express");
const helmet = require("helmet");
require('dotenv').config()

//require moduls
const auth = require('./routes/auth')
const user = require('./routes/user')

const App = express();


App.use(helmet());
App.use(express.json())

// route
App.use('/auth', auth)
App.use('/user', user)


App.listen(3000,()=> {
  console.log('The server is running at port 3000')
})


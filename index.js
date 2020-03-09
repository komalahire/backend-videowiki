var express = require('express');
var app = express()
app.use(express.json())
const jwt=require("jsonwebtoken") 
var cors = require('cors')
app.use(cors())
var bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json()).use(bodyParser.urlencoded({extended: true}))


app.use('/',login=express.Router());
require('./Routes/login')(login,jwt)


app.use('/',create=express.Router());
require('./Routes/home')(create,jwt,)


app.listen(8000,()=>{
    console.log("server is listening in this port 8000....")
})
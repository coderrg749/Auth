"use strict"
require('dotenv').config({ path: './config/.env' });
const express = require('express')
const app = express();
const userRouter=require('./app/routes/user');
const cors = require('cors')
require('./app/startup/dbConnection')()
const port = process.env.PORT ||8080


app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/user',userRouter);

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
"use strict"
const mongoose = require("mongoose");
require('dotenv').config()

//DB CONNECTION 
async function dbConnection() {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology:true,
    };
    await mongoose.connect(process.env.MONGO_URL,connectionParams)
    console.log("Connected Successfully to the db");
  } catch (err) {
    console.log(err.message,"Could not connect to the database");
  }
};


module.exports =dbConnection;

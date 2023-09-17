"use strict"

/// function for validating moongoid
const mongoose = require('mongoose')
module.exports =(id)=>{
    const isValidId = new mongoose.Types.ObjectId(id);
    if(isValidId){
        return id 
    }else{
        throw new Error("Invalid ID")
    }
}
"use strict"

const jwt = require('jsonwebtoken')

function generateToken(id,email){
    return jwt.sign({_id:id,email:email},process.env.SECRET_KEY,{expiresIn:'1h'})
}
const verifyToken = (token)=>{
    return jwt.verify(token,process.env.SECRET_KEY);
 }

 module.exports={
    generateToken,
    verifyToken
 }
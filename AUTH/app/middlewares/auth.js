"use strict"
const User = require('../models/user')
const { verifyToken } = require("../services/jwtToken");

// auth middleware -------------------------------------------------------------->
const authMiddleware = async (req, res, next) => {
  let token;
  try {
    if (
      req.headers["authorization"] &&
      req.headers["authorization"].startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decodedData = verifyToken(token);
      // console.log(decodedData)
      let userId=decodedData?._id;
      const user = await User.findById(userId);
      // console.log(user)
      req.user = user;
      next();
    } else {
      return res.status(401).json({ message: "Login Again Unauthorized" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" ,error:err });  }
};

/// Is Admin -------------------------------------------------------------------------------->
const isAdmin = async (req, res, next) => {
  try {
    if (req?.user?.role === "admin") {
      next();
    } else {
      return res.status(401).json({ message: "Not an admin" });
    }
  } catch (err) {
    throw new Error("Internal Server Error", err.message);
  }
};


module.exports ={
    authMiddleware,
    isAdmin
}
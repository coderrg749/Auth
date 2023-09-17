const mongoose = require('mongoose');


const otpSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true ,enum:["email","phone"]}, // 'email' or 'phone'
    otp: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },{
    timestamps:true
  });


  const Verification = mongoose.model('Verification', otpSchema);

module.exports = Verification;

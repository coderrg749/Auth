"use strict"
const Joi = require('joi');
const userSchema={}

//<---------------AUTH ROUTES VALIDATION SCHEMAS --------------------->

//SIGNUP FIELDS VALIDATION
userSchema.registerationSchema =Joi.object({
    first_name: Joi.string().min(3).max(15).required().pattern(/^[^@]+$/),
    last_name: Joi.string().min(3).max(15).required().pattern(/^[^@]+$/),
    email: Joi.string().email().required(),
    password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/)
    .required()
    .messages({
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
    }),
    confirm_password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/)
    .required()
    .messages({
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
    }),
    mobile:Joi.string().required(),//registe
    terms:Joi.bool().required()
})

// LOGIN FIELDS VALIDATION
userSchema.loginSchema = Joi.object({
  field : Joi.string().required()  , //alphanum().
  password: Joi.string()
  .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/)
  .required()
  .messages({
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
  }),
})

// RESET PASSWORD  FIELDS VALIDATION
userSchema.passwordSchema =Joi.object({
  oldPassword: Joi.string()
  .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/)
  .required()
  .messages({
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
  }),
  newPassword: Joi.string()
  .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/)
  .required()
  .messages({
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
  }),
  confirmPassword: Joi.string()
  .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/)
  .required()
  .messages({
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
  }),
})

//FORGOT PASSWORD FIELDS VALIDATION
userSchema.forgotPasswordSchema =Joi.object({
  email: Joi.string().email().required(),
})

// RESET PASSWORD FIELDS VALIDATION 
userSchema.resetPasswordSchema =Joi.object({
  newPassword: Joi.string()
  .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/)
  .required()
  .messages({
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
  }),
  confirmPassword: Joi.string()
  .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/)
  .required()
  .messages({
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
  }),
})



module.exports = userSchema;


// pattern(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/) GONA ADD LATER IN NUMBER FIELD 

const express = require('express')
const userModel = require('../models/user.model')

const authRoutes = express.Router()
/**
 * 
 */

authRoutes.post("/register",async(req,res)=>{
    const {email, name, password} = req.body

    const user = await userModel.create({
        email, name, password
    }) 
    res.status(201).json({
        message:"User created successfully",
        user
    }) 
    console.log(email, name, password)
})

module.exports= authRoutes
const crypto = require("crypto")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")



    async function registerController(req,res){
    const {email, username, password,bio,profileImage} = req.body


    const isUserAlreaduExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreaduExists){
        return res.status(409)
        .json({
            message:"User already exists" + ( isUserAlreaduExists.email == 
            email? "Email already exi":"Username already exists" )
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password:hash
    })

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET,
        {expiresIn:"id"}
    )

    res.cookie("token",token)
    res.status(201).json({
        message:"User Registered successfully",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })

}



async function loginController(req,res){
    const {username,email,password}= req.body
    /**
     * username
     * password
     * 
     * email
     * password
     */
    /**
     * {username :a ,email:undefined,password:test } = req.body
     * ya phir 
     * {username :undefined ,email:test,password:test } = req.body
     */

    const user = await userModel.findOne({
        $or:[
            {
                
                username: username
            },
            {
                
                email: email
            },
        ]
    })
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    
    if(!isPasswordValid){
        return res.status(401).json({
            message:"Password Invalid"
        })
    }
    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)

    res.status(200).json({
        message:"User LoggedIn successfully",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}

module.exports = {
    registerController,
    loginController
}
const express = require("express")
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const User = require("../models/User")
const jwt=require("jsonwebtoken")
const fetchuser=require("../middleware/fetchuser")

const seckey="thisisit"


// Create a user using POST
router.post("/createuser", [
    body("name", "Please enter a valid name").isLength({ min: 3 }),
    body("email", "Please enter a valid email").isEmail(),
    body("password", "password must be atleast 5 characters")
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ errors: "A user with this email exists " })
        }

        const salt = await bcrypt.genSalt(10);
        const newpass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newpass
        })
            const data={
                user:{
                    id:user.id
                }
            }

            const authtoken=jwt.sign(data,seckey)
        res.json({authtoken})



    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error" })

    }




})

// Authenticate user
router.post("/login",[
    body("email","Login with correct credentials"),
    body("password","Login with valid password")
],async ( req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email,password}= await req.body

    try {

        
    const user=await User.findOne({email})
    if(!user){
        return res.status(400).json({error:"Login with valid credentials"})
    }

    const passcom= await bcrypt.compare(password,user.password)
    if(!passcom){
        return res.status(400).json({error:"Password is incorrect"})
    }

    const data={
        user:{
            id:user.id
        }
    }

    let authtoken1=jwt.sign(data,seckey)
    res.json({authtoken1})


        
    } catch (error) {
        console.log(error)
        return res.json({error})
        
    }



})

// Fetching user data using POST
router.post("/verify",fetchuser,async (req,res)=>{
    const userId=req.car.id
     const car=await User.findById(userId).select("-password")
     res.send(car)
})

module.exports = router
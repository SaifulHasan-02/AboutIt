const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');
const User = require('../models/userSchema');
const { log } = require('console');


router.get('/', middleware, (req, res)=>{
    res.send('signup page')
})

router.post('/', async (req, res)=>{
    const{name, work, phone, email, password, confirmpassword} = req.body;

    if(!name || !work || !phone || !email || !password || !confirmpassword){
        return res.status(402).json({error: "Please fill option properly"})
    }
    try{
        const userExit = await User.findOne({email: email})

        if(userExit){
            return res.status(402).json({error: "User already exit"})
        }
        const user = new User({name, work, phone, email, password, confirmpassword})

        await user.save();
        console.log("Registration successful")
        res.status(202).json({msg: "Registration Successful"});
        
    }catch(err){
        console.log(err)
    }
    

})




module.exports = router;
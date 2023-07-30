const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');
const User = require('../models/userSchema');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


router.get('/', middleware, (req, res)=>{
    res.send('login page')
})

router.post('/', async (req, res)=>{
    try{
        let token;
        const{email, password} = req.body;
        if(!email | !password){
            return res.status(404).json({err: "Please, enter email and password"})
        }
        const userLogin = await User.findOne({email: email});
        
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            //creating token
            token = await userLogin.generateAuthToken();

            //storing token into the cookie
            res.cookie('jwttoken', token, {
                expires: new Date(Date.now() + 60000),
                httpOnly: true
            })

            if(!isMatch){
                res.status(404).json({error: "Invalid login credentials from inside"})
            }else{
                res.status(202).json({msg: "Login successful"})
            }
        }
        
        
    }catch(err){
        console.log("Invalid login credentials from outside")
    } 

})

module.exports = router;
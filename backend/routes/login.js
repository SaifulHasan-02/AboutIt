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
            cosnole.log("Nhi mila kuch input")
            return res.status(404).json({err: "Please, enter email and password"})
        }
        console.log("Hey theree")
        const userLogin = await User.findOne({email: email});
        
        if(userLogin){
            console.log("User Find")
            const isMatch = await bcrypt.compare(password, userLogin.password);
            console.log(isMatch)
            console.log("Matching suceessfully")
        
            if(isMatch){
                //creating token
                token = await userLogin.generateAuthToken();

                //storing token into the cookie
                res.cookie('jwttoken', token, {
                    expires: new Date(Date.now() + 600000),
                    httpOnly: true
                })
                res.status(202).json({msg: "Login successfully from Backend", status:202})
            }else{
                console.log("is Matcing is matching ")
                res.status(404).json({error: "Invalid login credentials from inside", status:false});
            }
        }   
        
    }catch(err){
        console.log("Invalid login credentials from outside")
    } 

})

module.exports = router;
const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware')


router.get('/', middleware, (req, res)=>{
    res.send('signup page')
})

router.post('/', (req, res)=>{
    const[name, work, phone, email, password, confirmpassword] = req.body;

    if(!name || !work || !phone || !email || !password || !confirmpassword){
        return res.status(402).json({error: "Please fill option properly"})
    }

})

module.exports = router;
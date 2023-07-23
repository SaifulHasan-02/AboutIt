const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware')


router.get('/', middleware, (req, res)=>{
    res.send('login page')
})

module.exports = router;
const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware')

router.get('/', middleware, (req, res)=>{
    res.send('signup page')
})

module.exports = router;
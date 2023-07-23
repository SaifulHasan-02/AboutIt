const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config({path:'./Config/config.env'})
const URL = process.env.URL
const connect = mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Connection Established")
}).catch((err)=>{
    console.log(err)
})

module.exports = connect
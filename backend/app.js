const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Mongodb/databaseconnection')
const app = express();


dotenv.config({path:'./Config/config.env'})
const PORT = process.env.PORT;



//import all routes
const home = require('./routes/home');
const signup = require('./routes/signup');
const login = require('./routes/login');
const about = require('./routes/about');
const contact = require('./routes/contact');

app.use('/', home);
app.use('/signup', signup);
app.use('/login', login);
app.use('/about', about)
app.use('/contact', contact)




app.listen(PORT, ()=>{
    console.log(`Server is listening at port number: ${PORT}`)
})
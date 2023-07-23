const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    work: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    }, 
    password: {
        type: String,
        require: true
    },
    confirmpassword: {
        type: String,
        require: true
    }

})

const User = mongoose.model('User', userSchema);
module.exports = User;
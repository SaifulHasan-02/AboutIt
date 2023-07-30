const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const bcyrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    },
    tokens: [
        {
            token: {
                type: String,
                require: true 
            }
        }
    ]

})

//hasing 
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcyrpt.hash(this.password, 12)
        this.confirmpassword = await bcyrpt.hash(this.confirmpassword, 12)
    }
    next();
})

//generating jwt token
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save()
        return token;
    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model('User', userSchema);
module.exports = User;
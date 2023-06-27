const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

// connecting the schema
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    // date:{
    //     type:Date,
    //     default:Date.now
    // },
});

userSchema.statics.signup = async function(email, password, userName) {
    if(!email || !password || !userName){
        throw Error('All fields  are required')
    };
    if(!validator.isEmail(email)){
        throw Error('Give a valid email')
    };
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }
    const existingUser = await this.findOne({email, userName})
    if(existingUser){
        throw Error('email or the username exists')
    }
    // hashing process
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({email,userName, password:hash});
    return user;
}

userSchema.statics.signin = async function(email, password){
    if(!email || !password  ){
        throw Error('all fields must be field')
    }
    const user = await this.findOne({email});
    if(!user){
        throw Error('Incorrect Email')
    };
    // comparing the passwords
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw Error('Incorrect password')
    }
    
    return user;
}


module.exports = mongoose.model('User', userSchema)


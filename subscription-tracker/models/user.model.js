import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"User name is required !"],
        trim:true,
        minLength:2,
        maxLength:50,
    },
    email:{
        type:String,
        required:[true,"Email is required !"],
        trim:true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,'Please use a valid email address !'],
        minLength:5,
        maxLength:255,
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],  
        minLength:6,
    }

},{timestamps:true});


// create a model

const User = mongoose.model("User",userSchema)

export default User;



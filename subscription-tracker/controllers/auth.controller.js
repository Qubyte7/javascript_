import mongoose from "mongoose"
import User from "../models/user.model";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env";

export const signUp = async (req,res,next) =>{
const session  = await mongoose.startSession();
session.startTransaction();  // allow us to perform atomic transaction (or operations) to the database where a user get either get authenticated successfully or when something along the way happens it stops the process

try{
    const {name,email,password} =  req.body;
    // check if the user already exists
    const userExists = await User.findOne({email});
    if(userExists){
        const error =  new Error('User already exists');
        error.statusCode = 409;
        throw error;
    }

    // hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,hash)

    //creating a new user
    const newUser = await User.create([{name,email,password:hashedPassword }],{session}); // we attach this user creation function to our session that when something gets wrong the session can be aborted

    // generating jwt token
    const token = jwt.sign({userId:newUser[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN})


    await session.commitTransaction();
    session.endSession

    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data:{
            token,
            user: newUser[0]
        }
    })

}catch(error){
    await session.abortTransaction();
    session.endSession();
    next(error);
}

}

export const signIn = async (req,res,next)=>{

}

export const signout = async (req,res,next)=>{

}
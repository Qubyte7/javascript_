import { NextFunction, Request, Response } from "express";
import prisma from "../config/prisma_client";
import { hashPassword } from "../utils/bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../config/mailer";

export const createUser = async (req:Request, res:Response,next:NextFunction) => {
    try{
    const {name,email,password,balance} = req.body;
    const clientAlreadyExists = await prisma.client.findUnique({where:{email:email}})

    if(clientAlreadyExists){
        return res.status(400).json({
            success:false,
            message:"User already exists"
        })
    }
    const hashedPassword = await hashPassword(password);
    const newClient = await prisma.client.create({
        data:{
            name:name,
            email:email,
            password:hashedPassword,
            balance:balance
        }
    })
        const token = jwt.sign({userId:newClient.id},process.env.JWT_SECRET as string,{expiresIn:"3d"})

       await sendEmail({toEmail: newClient.email})
       
    res.status(201).json({
        success:true,
        message:"User created successfully",
        data:newClient,
        token:token
    })
}catch(err){
    next(err);
}
}

export const getUser = async (req:Request, res:Response,next:NextFunction) => {
    
    try{
    const {id} = req.params;

    //validating if UUID is in its correct format
    if (!id || typeof id !== 'string' || id.length < 20 ) {
        return res.status(400).json({
            success: false,
            message: "Invalid user ID format"
        });
    }
    
    const user = await prisma.client.findUnique({
        where:{
            id:id
        }
    })
    console.log(user);
    

    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found"
        })
    }
    res.status(200).json({
        success:true,
        message:"User found successfully",
        data:user
    })
}catch(err){
    next(err);

}
}

export const deleteUser = async (req:Request, res:Response,next:NextFunction) => {
    try{
    const {id} = req.params;

    const user = await prisma.client.findUnique({
        where:{
            id:id
        }
    })
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found"
        })
    }

    await prisma.client.delete({
        where:{
            id:id
        }
    })

    res.status(200).json({
        success:true,
        message:"User deleted successfully",
    })
}catch(err){
    next(err);
}
}

export const updateUser = async (req:Request, res:Response,next:NextFunction) => {
    
    try{

    const {id} = req.params;
    const {name,email,password,balance} = req.body;

    const doesUserExist = await prisma.client.findUnique({where:{id:id}})
    if(!doesUserExist){
        return res.status(404).json({
            success:false,
            message:"User not found"
        })
    }

    const updatedUser = await prisma.client.update({
        where:{
            id:id
        },
        data:{
            name:name,
            email:email,
            password:password,
            balance:balance
        }
    })

    res.status(200).json({
        success:true,
        message:"User updated successfully",
        data:updatedUser
    })
    }catch(err){
        next(err);
    }
}
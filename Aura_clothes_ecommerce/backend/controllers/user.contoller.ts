import { NextFunction, Request, Response } from "express";
import prisma from "../config/prisma_client";

export const createUser = async (req:Request, res:Response,next:NextFunction) => {
    try{
    const {name,email,password,balance} = req.body;
    const userAlreadyExists = await prisma.client.findUnique({where:{email}})

    if(userAlreadyExists){
        return res.status(400).json({
            success:false,
            message:"User already exists"
        })
    }

    const newUser = await prisma.client.create({
        data:{
            name:name,
            email:email,
            password:password,
            balance:balance
        }
    })

    res.status(201).json({
        success:true,
        message:"User created successfully",
        data:newUser
    })
}catch(err){
    next(err);
}
}

export const getUser = async (req:Request, res:Response,next:NextFunction) => {
    
    try{
    const {uid} = req.params;

    const user = await prisma.client.findUnique({
        where:{
            id:uid
        }
    })
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
    const {uid} = req.params;

    const user = await prisma.client.findUnique({
        where:{
            id:uid
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
            id:uid
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

    const {uid} = req.params;
    const {name,email,password,balance} = req.body;

    const doesUserExist = await prisma.client.findUnique({where:{id:uid}})
    if(!doesUserExist){
        return res.status(404).json({
            success:false,
            message:"User not found"
        })
    }

    const updatedUser = await prisma.client.update({
        where:{
            id:uid
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
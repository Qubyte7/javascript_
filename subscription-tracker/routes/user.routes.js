import { Router } from "express";

const userRouter =  Router();

userRouter.get('/',(req,res)=>res.send({message: " User's routes"}))
userRouter.get('/:id',(req,res)=>res.send({message: " a User's routes"}))
userRouter.post('/',(req,res)=>res.send({message: "creating a new user"}))
userRouter.put('/:id',(req,res)=>res.send({message: " Updating a user"}))
userRouter.delete('/:id',(req,res)=>res.send({message: " deleting a user"}))


export default userRouter

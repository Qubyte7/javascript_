import { Router } from "express";
import  { getUsers, getUser} from "../controllers/user.controller.js"
import authorize from "../middleware/auth.middlware.js";

const userRouter =  Router();

userRouter.get('/',getUsers)
userRouter.get('/:id',authorize,getUser)
userRouter.post('/',(req,res)=>res.send({message: "creating a new user"}))
userRouter.put('/:id',(req,res)=>res.send({message: " Updating a user"}))
userRouter.delete('/:id',(req,res)=>res.send({message: " deleting a user"}))


export default userRouter

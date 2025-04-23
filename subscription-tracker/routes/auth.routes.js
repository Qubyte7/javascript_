import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up',(req,res)=> res.send({messsage : "signed up"}))
authRouter.post('/sign-in',(req,res)=> res.send({messsage : "signed in"}))
authRouter.post('/sign-out',(req,res)=> res.send({messsage : "signed out"}))


export default authRouter;
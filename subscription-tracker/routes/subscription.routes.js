import { Router } from "express";
import authorize from "../middleware/auth.middlware.js";
import { createSubscription,getUserSubscription } from "../controllers/subscription.controller.js";



const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=> res.send({message : "Gwamon"}))

subscriptionRouter.get('/:id',(req,res)=> res.send({message : "get subscription details"}))

subscriptionRouter.post('/',authorize,createSubscription)

subscriptionRouter.put('/:id',(req,res)=> res.send({message : "update subscription"}))

subscriptionRouter.delete('/:id',(req,res)=> res.send({message : "revoke subscription"}))

// get user subscriptions
subscriptionRouter.get('/user/:id',authorize,getUserSubscription)

subscriptionRouter.put('/:id/cancel',(req,res)=> res.send({message : "cancel subscription"}))

subscriptionRouter.get('/upcoming-renewals',(req,res)=> res.send({message : "get upcoming renewals"}))







export default subscriptionRouter;
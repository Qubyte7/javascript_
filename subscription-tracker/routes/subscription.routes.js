import { Router } from "express";




const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=> res.send({message : "Gwamon"}))

subscriptionRouter.get('/:id',(req,res)=> res.send({message : "get subscription details"}))

subscriptionRouter.post('/',(req,res)=> res.send({message : "create subscription"}))

subscriptionRouter.put('/:id',(req,res)=> res.send({message : "update subscription"}))

subscriptionRouter.delete('/:id',(req,res)=> res.send({message : "revoke subscription"}))

subscriptionRouter.get('/user/:id',(req,res)=> res.send({message : "get all subscriptions for a particular user"}))

subscriptionRouter.put('/:id/cancel',(req,res)=> res.send({message : "cancel subscription"}))

subscriptionRouter.get('/upcoming-renewals',(req,res)=> res.send({message : "get upcoming renewals"}))







export default subscriptionRouter;
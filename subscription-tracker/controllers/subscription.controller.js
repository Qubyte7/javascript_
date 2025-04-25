import { SERVER_URL } from "../config/env.js";
import { workflowClient } from "../config/upstash.js";
import Subscription from "../models/subscription.model.js";


export const createSubscription = async (req,res,next)=>{
    try {
        const subscription =  new Subscription.create({
            ...req.body,
            user: req.user._id, // this (user) comes from our request from the authorize middleware ( check subscription post route )
        })
        // payment reminder timer triggering
        await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflow/reminder`,
            body:{
                subscriptionId: subscription.id,
            },
            headers:{
                'content-type':'application/json',
            },
            retries:0,
        })

        res.status(201).json({
            success:true,
            data:subscription
        });

    } catch (error) {
        next(error);
    }
}


export const getUserSubscription = async(req,res,next)=>{
    try{
        // check if the user is the one with the token
        if(req.user._id != req.params.id){
            const error = new Error("You are not the owner of this account");
            error.status = 401 ;
            throw error;
        }

        const subscription = await Subscription.find({user:req.params.id});
        res.status(200).json({success:true,data:subscription})
    }catch(error){
        next(error);
    }
}


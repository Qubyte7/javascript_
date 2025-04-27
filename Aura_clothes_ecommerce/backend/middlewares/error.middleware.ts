import { Errback, ErrorRequestHandler, NextFunction, Request, Response } from "express";

const errorMiddleware = (err:any, req:Request, res:Response, next:NextFunction) => {
    try{
    let error = { ...err};
    error.message = err.message
    console.error(err);
    }catch(err){
        next(err);
    }

}

export default errorMiddleware;
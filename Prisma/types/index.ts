import { Request, Response, NextFunction } from 'express';

export interface ControllerTypes{
    req:Request,
    res:Response,
    next:NextFunction
}
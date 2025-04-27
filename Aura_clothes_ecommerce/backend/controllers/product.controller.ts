import { NextFunction, Request, Response } from 'express';
import prisma from '../config/prisma_client';

enum size {
    SM= 7.5,
    MD= 8.5,
    LG= 9.5,
    XL= 10.5,
}


const createProduct = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const { name,type,size,quantity,price, description,rate,createdAt,updatedAt} = req.body;
        
        const productAlreadyExists = await prisma.product.findFirst({where:{name,type,size}
        })
        if (productAlreadyExists) {
            return res.status(400).json({
                success: false,
                message: 'Product already exists',
                data: productAlreadyExists
                
            });
        }
        
        const product = await prisma.product.create({
            data: {
                name,
                price,
                type,
                size,
                quantity,
                description,
                rate,
                createdAt,
                updatedAt
            }
        });
        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: product
        });
    } catch (err) {
        next(err);
    }
}





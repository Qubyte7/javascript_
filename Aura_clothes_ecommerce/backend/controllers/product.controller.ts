import { NextFunction, Request, Response } from 'express';
import prisma from '../config/prisma_client';

enum size {
    SM= 7.5,
    MD= 8.5,
    LG= 9.5,
    XL= 10.5,
}


export const createProduct = async (req: Request, res: Response, next:NextFunction) => {
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

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const productId = parseInt(id)

        const product = await prisma.product.findUnique({
            where: {
                id:productId
            }
        });
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Product found successfully',
            data: product
        });
    } catch (err) {
        next(err);
    }
}

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { id } = req.params;
        const productId = parseInt(id)

        const product = await prisma.product.findUnique({
            where: {
                id:productId
            }
        });
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        await prisma.product.delete({
            where: {
                id:productId
            }
        });
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
        });
    }catch(err){
        next(err);
    }
}



export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const productId = parseInt(id)

        const product = await prisma.product.findUnique({
            where: {
                id:productId
            }
        });
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        const updatedProduct = await prisma.product.update({
            where: {
                id:productId
            },
            data: req.body
        });
        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            data: updatedProduct
        });
    } catch (err) {
        next(err);
    }
}





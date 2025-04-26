import { NextFunction, Request, Response } from "express";
import { prisma } from "../config";
import { ControllerTypes } from "../types";
export const createBook=async(req:Request,res:Response,next:NextFunction)=>{
    const {categoryname,authorId,bookName}=req.body;
    const author = await prisma.author.findUnique({
        where:{
            id:authorId
        }
     })
     if(!author){
        res.status(500).json({
            message:"Access Denied(User not found)"
        })
     }
    let category=await prisma.category.findFirst({
        where:{
        categoryname:categoryname
        }
    })
    if(!category){
        const newCategory=await prisma.category.create({
            data:{
            categoryname: categoryname
            }   
        })
        category=newCategory;
    }
    
    //creating a new book with its new category
    const newbook = await prisma.book.create({
        data:{
            name:bookName,
            authorId: author?.id,
        
        }
    })
// create joint record
const categoryAndBooks=await prisma.categoryOnBooks.create({
    data:{
        categoryName:category?.categoryname,
        bookCategoryId:category?.id,
        bookId:newbook.id,
        bookName:newbook.name   

    }
})
res.status(200).json({
    message:"Book created succcessfully",
    data:categoryAndBooks
})
}



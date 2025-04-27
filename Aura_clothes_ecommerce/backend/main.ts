import  Express from "express";
import prisma from "./config/prisma_client";
import { PORT } from "./config/env";
import userRouter from "./routes/user.route";
import errorMiddleware from "./middlewares/error.middleware";
import { error } from "console";
import productRouter from "./routes/product.route";

const app = Express();

//middlewares
app.use(Express.json());
app.use(errorMiddleware);

//routes
app.use("/aura/api/v1/users",userRouter)
app.use("/aura/api/v1/products",productRouter)


app.listen(PORT, ()=>{

    prisma.$connect().then(()=>{
        console.log("application connected to the database and running on port", PORT);
    }).catch((error)=>{
        console.log(error.message);
        prisma.$disconnect();
        
    })
    
})
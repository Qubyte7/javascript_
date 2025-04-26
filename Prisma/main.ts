import Express from "express"
import Cors from "cors"
import { prisma } from "./config"
import bookRouter from "./routes/book.route"

const app=Express()
app.use(Express.json())
app.use("/api/v1/books",bookRouter)


app.listen(5000,()=>{
    prisma.$connect().then(()=>{
        console.log("Application running on port 5000")
    }).catch((error)=>{
        console.log(error.message)
        prisma.$disconnect()
    })
    
})

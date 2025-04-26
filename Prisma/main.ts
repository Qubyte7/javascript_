import Express from "express"
import Cors from "cors"
import { prisma } from "./config"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./swagger"

import bookRouter from "./routes/book.route"

const app=Express()
app.use(Express.json())

//swagger UI middleware
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
app.use("/api/v1/books",bookRouter)


app.listen(5000,()=>{
    prisma.$connect().then(()=>{
        console.log("Application connected to the database and running on port 5000")
    }).catch((error)=>{
        console.log(error.message)
        prisma.$disconnect()
    })
    
})

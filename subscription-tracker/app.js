import express, { urlencoded } from 'express';
import { PORT } from './config/env.js';
import  authRouter  from './routes/auth.routes.js';
import  userRouter  from './routes/user.routes.js';
import  subscriptionRouter  from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import  errorMidlleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleWare from './middleware/arcjet.middleware.js';
import workflowRouter from './routes/workflow.route.js';

const app = express();




// built in express middleware
app.use(express.json()); // enable to handle json responses
app.use(express.urlencoded({extended:false})); // handle html forms
app.use(cookieParser());

// custom defined middlewares
app.use(errorMidlleware);
app.use(arcjetMiddleWare);

//routes
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);
app.use('/api/v1/workflows',workflowRouter)


 app.get('/', (req, res) => {
     res.send('welcome to the wizards page');
 });

app.listen(PORT,async ()=>{
    console.log(`app listening on ${PORT}`)
    await connectToDatabase() ;
})
export default app;
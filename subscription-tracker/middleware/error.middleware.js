const errorMidlleware = (err,req,res,next)=>{
    //err  : represents an error 
    // next : defines the next middlware in the middleware stack
    try{
        let error = { ...err};
        error.message = err.message
        console.error(err);

        //mongoose bad objectId
        if(err.name === 'CastError'){
            const message = 'Resource not Found';
            error = new Error(message);
            error.statusCode = 404;

        }
        // Mongoose Duplicate  Key
        if (err.code === 11000 ){
            const message = 'Duplicate field value entered'
            error = new Error(message);
            error.statusCode = 400
        }

        //mongoose validation error
        if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            error = new Error(message.join(', '));
            error.statusCode = 400
        }

        res.status(error.statusCode || 500).json({success:false,error:error.message || 'server error'})

    }catch(error){
        next(error)
    }
}


export default errorMidlleware
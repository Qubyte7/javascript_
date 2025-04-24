import aj from "../config/arcjet.config.js"

const arcjetMiddleWare = async(req,res,next) => {
    try{
        const decision = await aj.protect(req,{requested: 1}); // decision from arcjet depending on the safety of arcjet.
       if (decision.isDenied()){
        if(decision.reason.isRateLimit) return res.status(429).json({error:" Too Many requests "});
        if(decision.reason.isBot) return res.status(403).json({error:"Bot detected ! "});
        return res.status(403).json({error: " Request not safe ( cc: ArcJet) "})
        next();
       }
    }catch(error){
        console.log(`Arcjet message Error: ${error}`);
        next(error);
        
    }
}


export default arcjetMiddleWare;




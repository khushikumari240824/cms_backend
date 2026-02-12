import rateLimiter from "express-rate-limit";
export const apiLimiter = rateLimiter({
    windowMs: 1*60*1000,
    max:2,
    message:{
        sucess: false,
        message:"too many requests, please try again later"
    },
    standardHeaders:true,
    legacyHeaders:false

});
export default rateLimiter;
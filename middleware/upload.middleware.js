import multer from "multer";
import path from "path";
//storage configuration
const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, "uploads/");
    },
    filename:(req, file, cb)=>{
        const uniqueName =
        Date.now() + "-"+ Math.round(Math.random() * 1e9);
        cb(null, uniqueName + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb)=>
{
    if(
        file.mimetype.startsWith("image/") ||
        file.mimetype === "application/pdf"
    ){
        cb(null, true);
    }
    
        else{
            cb(new Error("only image or pdfs allowed"), false);
        }
    
};
export const upload = multer({
    storage,
    fileFilter,
    limits:{
        fileSize: 5*1024*1024 //5mb
    }
});

import {v2 as cloudinary} from "cloudinary";
cloudinary.config({
    cloud_name: process_env.CLOUDINARY_CLOUD_NAME,
    api_key: process_env.CLOUDINARY_API_KEY,
    api_secret: process_env.CLOUDINARY_API_SECRET
});
console.log("keys",process_env.CLOUDINARY_CLOUD_NAME,
    process_env.CLOUDINARY_API_KEY,
    process_env.CLOUDINARY_API_SECRET

)
export default cloudinary;
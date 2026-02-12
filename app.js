import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoute from "./routes/auth.route.js";
import artifactRoutes from "./routes/artifacts.route.js";
import cookieParser from "cookie-parser";
import { testing } from "./cron/testing.js";
import webHook from "./webHook/webHook.js";
const app = express();
app.use(cors());
//middleware
app.use(cors());
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extended: true, limit :"10mb"}));
app.use(morgan("dev"));
testing();
app.use(cookieParser());
//test route
app.get("/",(req,res)=>{
    res.status(200).json({
        success: true,
        message:"cms backend is running"
    });
});
app.use("/webHook",webHook);
app.use("/auth",authRoute);

app.use("/artifacts",artifactRoutes);
export default app;
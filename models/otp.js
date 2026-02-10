import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt";
import { emit } from "node:cluster";
const otpSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: true

        },
        otp: {
            type: String,
            required: true
        },
        expiresAt:{
            type: Date,
            required: true
        }
    },
    {timestamps: true}
);
otpSchema.pre("save", async function (next){
    //prevent re-hashing
    if(!this.isModified("otp")) return next();
    const saltRounds = 10;
    this.otp = await bcrypt.hash(this.otp, saltRounds);
});
export default mongoose.model("OTP", otpSchema);
import mongoose from "mongoose";
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";

const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()

const userSchema = new mongoose.Schema({
    email:{type:String},
    name:{type:String,require:true,min:2,max:40},
    age:{type:String},
    phone:{type:String},
    password:{type:String},
    date:{type:String,default:currentDate},
    time:{type:String,default:currentTime},
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema)

export default User 
import mongoose from "mongoose";
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";

const GetCurrent1Date=GetCurrentDate()
const GetCurrent1Time=GetCurrentTime()

const noteSchema = new mongoose.Schema({
    title:String,
    note:String,
    category:[],
    userID:String,
    NoteDate:{type:String,default:GetCurrent1Date},
    NoteTime:{type:String,default:GetCurrent1Time}
})

const Note = mongoose.model("Note",noteSchema)

export default Note
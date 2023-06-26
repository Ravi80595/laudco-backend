import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './Routes/users.js'
import noteRoutes from './Routes/notes.js'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use("/user",userRoutes)
app.use("/notes",noteRoutes)


const PORT = process.env.PORT || 3001
let connections = mongoose.connect(process.env.MONGO_URL)

app.listen(PORT,()=>{
    try{
        connections
        console.log(`Server Connected With DataBase ${PORT}`)
    }
    catch(err){
    console.log("Somethning Wents Wrong",err)
    }
})
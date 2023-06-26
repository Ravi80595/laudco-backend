import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken'
import User from '../Models/User.js';



// ........................... User Signup Method ...............................

export const register = async (req,res)=>{
    try{
        const {name,email,password,phone,age} = req.body;
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password,salt)
        const newUser = new User({
            name,
            email,
            password:passwordHash,
            phone,
            age
        })
        const saveUser = await newUser.save()
        res.status(201).send({"msg":"User Saved Successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})
    }
}

// ........................... User Login Method ...............................

export const login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await User.findOne({email:email})
        if(!user) return res.status(400).json({msg:"User not exist"})

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({msg:"wrong details"})

        const token= jwt.sign({id:user._id},process.env.JWT_KEY)
        delete user.password;
        res.status(200).send(token)

    }catch(err){
        console.log(err)
    }
}
// ........................... User Profile Get Method ...............................

export const getUserProfile = async (req, res) => {
    try {
        const userID = req.user.id
        // console.log(userID)
        const user = await User.findById(userID)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
}

// ........................... User Get Method ...............................

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
}

// ...........................All Users Get Method ...............................

export const AllUsers=async(req,res)=>{
    try{
       const users=await User.find()
       res.status(200).send(users)
    }catch (err) {
        console.log(err)
    }
}

// ........................... User Search Method ...............................

export const searchUser=async(req,res)=>{
    const params=req.params.id
    try{
        const users= await User.find({name:{$regex:req.params.id}})
        res.send(users)
    }catch (err) {
        console.log(err)
    }
}

// ........................... User Search Method by Age ...............................

export const searchUserbyAge=async(req,res)=>{
    const params=req.params.id
    try{
        const users= await User.find({age:{$regex:req.params.id}})
        res.send(users)
    }catch (err) {
        console.log(err)
    }
}


// ........................... User Search Method by Age ...............................

export const searchUserbyEmail=async(req,res)=>{
    const params=req.params.id
    try{
        const users= await User.find({email:{$regex:req.params.id}})
        res.send(users)
    }catch (err) {
        console.log(err)
    }
}
// ........................... User Search Method by Phone ...............................

export const searchUserbyPhone=async(req,res)=>{
    const params=req.params.id
    try{
        const users= await User.find({phone:{$regex:req.params.id}})
        res.send(users)
    }catch (err) {
        console.log(err)
    }
}
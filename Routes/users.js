import express from "express"
import { AllUsers, getUserProfile, login,register, searchUser, searchUserbyAge, searchUserbyEmail, searchUserbyPhone } from "../Controllers/Auth.js"
import Authenticate from "../Middelwares/Authenticate.js"

const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.get('/allusers',AllUsers)
router.get('/userProfile',Authenticate,getUserProfile)
router.get('/search/:id',searchUser)
router.get('/searchAge/:id',searchUserbyAge)
router.get('searchEmail/:id',searchUserbyEmail)
router.get('/searchPhone/:id',searchUserbyPhone)

export default router
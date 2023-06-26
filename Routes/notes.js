import express from "express"
import Authenticate from "../Middelwares/Authenticate.js"
import { CreateNote, Notes, deleteNote, updateNote } from "../Controllers/Notes.js"

const router = express.Router()

router.get("/userNotes",Authenticate,Notes)
router.post("/createNote",Authenticate,CreateNote)
router.delete('/deleteNote/:noteID',Authenticate,deleteNote)
router.patch('/editNote/:noteID',Authenticate,updateNote)




export default router
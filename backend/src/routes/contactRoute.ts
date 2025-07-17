import {postContact,getAllContacts} from "../controller/ContactController"
import express,{Router} from "express"
import { authenticateToken,authorize } from "../middleware/authenthicateToken"
const route:Router=express.Router()

route.post("/postContact",postContact)
route.get("/getAllContact",authenticateToken,authorize("admin"),getAllContacts)

export default route;
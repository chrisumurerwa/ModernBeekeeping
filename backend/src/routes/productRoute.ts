import { createproduct,getAllproducts,getproductById,updateproduct, } from "../controller/productController";
import express,{Router} from "express"
import { authenticateToken,authorize } from "../middleware/authenthicateToken";
import upload from "../middleware/multerGeneral";

const route:Router=express.Router();

route.post("/addProduct",authenticateToken,authorize("admin"),upload.single("imageUrl"),createproduct)

export default route;
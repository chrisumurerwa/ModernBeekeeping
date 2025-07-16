import { createproduct,getAllproducts,getproductById,updateproduct,deleteproduct } from "../controller/productController";
import express,{Router} from "express"
import { authenticateToken,authorize } from "../middleware/authenthicateToken";
import upload from "../middleware/multerGeneral";

const route:Router=express.Router();

route.post("/addProduct",authenticateToken,authorize("admin"),upload.single("imageUrl"),createproduct)
route.get("/getAllProduct",getAllproducts)
route.delete("/deleteProduct/:id",authenticateToken,authorize("admin"),deleteproduct)


export default route;
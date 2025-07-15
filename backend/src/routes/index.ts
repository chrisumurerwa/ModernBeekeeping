//mireille
import Product from "./productRoute"
import User from "./authRoute"

//victorie




//deborah




import express ,{Router} from "express";

const router:Router=express.Router();

//mireille
router.use("/product",Product)
router.use("/user",User)

//victorie



//deborah




export default router;

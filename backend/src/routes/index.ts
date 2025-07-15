//mireille
import Product from "./productRoute"
import User from "./authRoute"


//victorie
import stories from"./stories"



//deborah




import express ,{Router} from "express";

const router:Router=express.Router();

//mireille
router.use("/product",Product)
router.use("/user",User)

//victorie

router.use("/stories",stories)

//deborah




export default router;

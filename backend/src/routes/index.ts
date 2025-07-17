import Product from "./productRoute"
import User from "./authRoute"
import Contact from "./contactRoute"
import Story from "../routes/productRoute"
import express ,{Router} from "express";
const router:Router=express.Router();
router.use("/product",Product)
router.use("/user",User)
router.use("/contact",Contact)
router.use("/story",Story)
export default router;

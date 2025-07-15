import { Router } from "express";
import {createStory,getAllStories,getStoryById,updateStory,deleteStory}from "../controller/StoryController";
import { upload } from "../middleware/upload";
const router = Router();

router.post("/",upload.single("coverImage"), createStory);
router.get("/",getAllStories);
router.get("/:id",getStoryById);
router.put("/:id",upload.single("coverImage"),updateStory);
router.delete("/:id",deleteStory);

export default router;

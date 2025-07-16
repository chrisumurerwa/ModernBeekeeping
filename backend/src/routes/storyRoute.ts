import { Router } from "express";
import {createStory,getAllStories,getStoryById,updateStory,deleteStory}from "../controller/storyController";
import { upload } from "../middleware/upload";
const router = Router();

router.post("/addStory",upload.single("coverImage"), createStory);
router.get("/getAllStories",getAllStories);

export default router;
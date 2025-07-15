import { Router } from "express";
import {createStory,getAllStories,getStoryById,updateStory,deleteStory}from "../Controllers/StoryController";
import { upload } from "../middlewares/upload";
const router = Router();

router.post("/",upload.single("coverImage"), createStory);
router.get("/",getAllStories);
router.get("/:id",getStoryById);
router.put("/:id",upload.single("coverImage"),updateStory);
router.delete("/:id",deleteStory);

export default router;

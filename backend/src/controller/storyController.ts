import { Request, Response } from "express";
import * as service from "../services/storyService";

export const createStory = async (req: Request, res: Response) => {
  const { title, content, author, tags } = req.body;
  let coverImage: string | undefined;

  if (req.file) {
    coverImage = req.file.filename; 
  }

  const story = await service.createStory({
    title,
    content, 
    author,
    tags: tags ? tags.split(",") : [],
    coverImage,
  });

  res.status(201).json(story);
};


export const getAllStories = async (_: Request, res: Response) => {
  const stories = await service.getAllStories();
  res.json(stories);
};

export const getStoryById = async (req: Request, res: Response) => {
  const story = await service.getStoryById(req.params.id);
  if (!story) return res.status(404).json({ message: "Not found" });
  res.json(story);
};

export const updateStory = async (req: Request, res: Response) => {
  const data: any = req.body;
  if (req.file) {
    data.coverImage = req.file.filename;
  }
  const updated = await service.updateStory(req.params.id, data);
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
};

export const deleteStory = async (req: Request, res: Response) => {
  const deleted = await service.deleteStory(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
};
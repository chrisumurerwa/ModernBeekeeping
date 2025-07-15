import { AppDataSource } from "../config/db";
import { Story } from "../entity/storyEntity";

const storyRepo = AppDataSource.getRepository(Story);

export const createStory = async (data: Partial<Story>) => {
  const story = storyRepo.create(data);
  return await storyRepo.save(story);
};

export const getAllStories = async () => {
  return await storyRepo.find({ order: { createdAt: "DESC" } });
};

export const getStoryById = async (id: string) => {
  return await storyRepo.findOneBy({ id });
};

export const updateStory = async (id: string, data: Partial<Story>) => {
  await storyRepo.update(id, data);
  return await getStoryById(id);
};

export const deleteStory = async (id: string) => {
  const story = await getStoryById(id);
  if (!story) return null;
  await storyRepo.remove(story);
  return story;
};

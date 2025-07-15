import { DataSource } from "typeorm";
import { Story } from "../entity/storyEntity";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.POSTGRES_URL,
  synchronize: true,
  logging: true,
  ssl: { rejectUnauthorized: false },  // ✅ required for self-signed
  entities: [Story],
});


export const InitializeDatabase = async():Promise<void>=>
{
    try{
        await AppDataSource.initialize()
        console.log("Database Connected Successfully")
    }
    catch(error)
    {
        console.error("Error connecting to database",error)
        throw error;
    }
}



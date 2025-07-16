import { DataSource } from "typeorm";
import { User } from "../entity/userEntity";
import { Token } from "../entity/Token";
import { Product } from "../entity/productEntity";

import { Contact } from "../entity/contact2";
import * as dotenv from "dotenv";
dotenv.config();
export const AppDataSource=new DataSource(
{
type:"postgres",
host:process.env.DB_HOST,
 port: 5432,
 username: process.env.DB_USERNAME,
 password: process.env.DB_PASSWORD,
 database: process.env.DB_NAME,
 synchronize: true,
 logging: ["error"],
 entities: [User,Token,Product,Contact],
 migrations: [],
 subscribers: [],
})

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



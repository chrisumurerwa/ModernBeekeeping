import 'reflect-metadata';
import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import routes from './routes/index';
import { InitializeDatabase } from './config/db';
import {errorHandler} from "./middleware/errorhandler"
import cors from "cors"
dotenv.config();

// const app: Express = express();
const app = express();
const PORT=Number(process.env.PORT);

app.use(cors()); 

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/', routes);
app.use(errorHandler);


const startServer = async () => {
    try {
      
      await InitializeDatabase();
      
      
     app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
  };
  
  
  startServer();
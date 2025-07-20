import { Request, Response, NextFunction, RequestHandler, } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { BadRequestError} from '../error';
import { AppDataSource } from '../config/db';
import { User } from '../entity/userEntity';
import {LoginInput} from "../schemas/auth.schemas"
import {AuthenticatedRequest,ApiResponse} from "../types/common.types"
dotenv.config();

export const test = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to User Management ' });
};


export const SignIn = async (
    req: AuthenticatedRequest&LoginInput,
     res: Response<ApiResponse>, 
     next: NextFunction) => {

try{
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({
     where: { email: req.body.email }
         });

    if (!user) return next(new BadRequestError('Invalid credentials'));

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) return next(new BadRequestError('Invalid password'));

    const token = jwt.sign({ id: user.id, email: user.email, name: user.name, role: user.role }, process.env.JWT_SECRET_KEY!, { expiresIn: '2h' });
    res.status(200).json({ success:true,message: 'Login successful',     
        data: {
        user:{
            id:user.id,
            name:user.name,
            email:user.email,
            role:user.role,
        },
        token:token
    }});
  }
  catch(err)
  {
    res.status(500).json({
      success:false,
      message:"error occured to login",
      data:err
  })
  }
};



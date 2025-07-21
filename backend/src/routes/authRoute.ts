import express, { Router } from 'express';
import {  SignIn} from '../controller/UserController';
import { validate } from '../middleware/validation.middleware';
import { loginSchema} from '../schemas/auth.schemas';
const router: Router = express.Router();
router.post('/signin', validate(loginSchema), SignIn);
export default router;
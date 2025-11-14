import { Router } from 'express';
import { signup, login } from '../controllers/auth.controller';
export const authRouter = Router();
/** @openapi /api/auth/signup: post */
authRouter.post('/signup', signup);
/** @openapi /api/auth/login: post */
authRouter.post('/login', login);

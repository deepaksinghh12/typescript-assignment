import { Router } from 'express';
import { signup, login } from '../controllers/auth.controller';
export const authRouter = Router();
/**
 * @openapi
 * /api/auth/signup:
 *   post:
 *     summary: Signup
 *     tags: [Auth]
 */
authRouter.post('/signup', signup);
/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 */
authRouter.post('/login', login);

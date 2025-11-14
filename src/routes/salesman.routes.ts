import { Router } from 'express';
import { viewBeats, markAttendance, logVisit } from '../controllers/salesman.controller';
import { authenticate } from '../middlewares/auth.middleware';
export const salesmanRouter = Router();
salesmanRouter.get('/beats', authenticate(['salesman']), viewBeats);
salesmanRouter.post('/attendance', authenticate(['salesman']), markAttendance);
salesmanRouter.post('/visit', authenticate(['salesman']), logVisit);

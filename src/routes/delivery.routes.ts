import { Router } from 'express';
import { viewAssigned, updateStatus } from '../controllers/delivery.controller';
import { authenticate } from '../middlewares/auth.middleware';
export const deliveryRouter = Router();
deliveryRouter.get('/assigned', authenticate(['delivery']), viewAssigned);
deliveryRouter.post('/orders/:orderId/status', authenticate(['delivery']), updateStatus);

import { Router } from 'express';
import { createOrder, getOrder } from '../controllers/order.controller';
import { authenticate } from '../middlewares/auth.middleware';
export const orderRouter = Router();
orderRouter.post('/', authenticate(['customer']), createOrder);
orderRouter.get('/:id', authenticate(), getOrder);

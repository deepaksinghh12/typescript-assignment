import { Router } from 'express';
import { listStores, raiseComplaint } from '../controllers/customer.controller';
import { authenticate } from '../middlewares/auth.middleware';
export const customerRouter = Router();
customerRouter.get('/stores', listStores);
customerRouter.post('/complaint', authenticate(['customer']), raiseComplaint);

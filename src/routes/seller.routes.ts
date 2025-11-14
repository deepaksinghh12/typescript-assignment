import { Router } from 'express';
import { addProduct, updateProduct, listOrders, acceptOrderItems, assignDelivery } from '../controllers/seller.controller';
import { authenticate } from '../middlewares/auth.middleware';
export const sellerRouter = Router();
sellerRouter.post('/product', authenticate(['seller']), addProduct);
sellerRouter.put('/product/:id', authenticate(['seller']), updateProduct);
sellerRouter.get('/orders', authenticate(['seller']), listOrders);
sellerRouter.post('/orders/:orderId/accept', authenticate(['seller']), acceptOrderItems);
sellerRouter.post('/orders/:orderId/assign-delivery', authenticate(['seller']), assignDelivery);

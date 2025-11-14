import { Router } from 'express';
import { listSellerProducts, deactivateProduct } from '../controllers/product.controller';
import { authenticate } from '../middlewares/auth.middleware';
export const productRouter = Router();
productRouter.get('/seller/:sellerId', listSellerProducts);
productRouter.post('/:id/deactivate', authenticate(['seller']), deactivateProduct);

import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/database';
import { swaggerUiServe, swaggerUiSetup } from './swagger/swagger';
import { authRouter } from './routes/auth.routes';
import { sellerRouter } from './routes/seller.routes';
import { productRouter } from './routes/product.routes';
import { orderRouter } from './routes/order.routes';
import { deliveryRouter } from './routes/delivery.routes';
import { salesmanRouter } from './routes/salesman.routes';
import { customerRouter } from './routes/customer.routes';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);
app.use('/api/delivery', deliveryRouter);
app.use('/api/salesman', salesmanRouter);
app.use('/api/customer', customerRouter);
app.use('/api-docs', swaggerUiServe, swaggerUiSetup);

const port = process.env.PORT || 3000;
sequelize.authenticate().then(()=>console.log('DB connected')).catch(e=>console.error(e));
app.listen(port, ()=>console.log('Listening on', port));

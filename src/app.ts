import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/database';
import { swaggerUiServe, swaggerUiSetup } from './swagger/swagger';
import { authRouter } from './routes/auth.routes';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api-docs', swaggerUiServe, swaggerUiSetup);

const port = process.env.PORT || 3000;
sequelize.authenticate().then(()=>console.log('DB connected')).catch(e=>console.error(e));
app.listen(port, ()=>console.log('Listening on', port));

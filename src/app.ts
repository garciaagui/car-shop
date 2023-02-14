import express from 'express';
import CarRoutes from './Routes/CarRoutes';
import errorMiddleware from './Middlewares/errorMiddleware';

const app = express();
app.use(express.json());
app.use('/cars', CarRoutes);
app.use(errorMiddleware);

export default app;

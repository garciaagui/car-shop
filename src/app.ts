import express from 'express';
import CarRoutes from './Routes/CarRoutes';
import MotorcycleRoutes from './Routes/MotorcycleRoutes';
import errorMiddleware from './Middlewares/errorMiddleware';

const app = express();
app.use(express.json());
app.use('/cars', CarRoutes);
app.use('/motorcycles', MotorcycleRoutes);
app.use(errorMiddleware);

export default app;
// 
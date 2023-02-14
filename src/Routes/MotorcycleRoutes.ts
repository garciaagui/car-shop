import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

routes.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

routes.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

routes.delete(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default routes;
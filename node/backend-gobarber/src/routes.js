import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

// Works for the routes that come after routes.use(authMiddleware);
routes.use(authMiddleware);

routes.post('/sessions', SessionController.store);

export default routes;

import express from 'express';

import ClassController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();
const classControllers = new ClassController();
const connectionController = new ConnectionController();

routes.post('/classes', classControllers.create);
routes.get('/classes', classControllers.index);

routes.post('/connections', connectionController.create)
routes.get('/connections', connectionController.index)

export default routes;
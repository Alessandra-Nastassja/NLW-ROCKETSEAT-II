import express from 'express';

import ClassController from './controllers/ClassesController';

const routes = express.Router();
const classControllers = new ClassController();

routes.post('/classes', classControllers.create);
routes.get('/classes', classControllers.index);

export default routes;
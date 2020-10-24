import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesController';
import UsersController from './controllers/UsersController';
import uploadConfig from './config/upload';

const routes = Router()
const upload = multer(uploadConfig)

// MVC - Model Views Controllers

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.put('/orphanages/:id', upload.array('images'), OrphanagesController.update);
routes.delete('/orphanages/:id', OrphanagesController.delete);

routes.get('/users', UsersController.index);
routes.post('/users/create', UsersController.create);
routes.post('/users/login', UsersController.login);
routes.post('/users/auth', UsersController.auth, UsersController.show);
routes.delete('/users/:id', UsersController.delete);

export default routes;
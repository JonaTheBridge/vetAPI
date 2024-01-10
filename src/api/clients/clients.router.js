import Router from 'express';
import * as clientsController from './clients.controller.js';

const router = Router();

router.get('/all', clientsController.getAll);
router.get('/document/:number', clientsController.getByDocumentNumber);
router.get('/byFilter', clientsController.getByFilter);
router.post('/', clientsController.post);
router.put('/:id', clientsController.replace);
router.patch('/:id', clientsController.update);
router.delete('/:id', clientsController.remove);

export default router;

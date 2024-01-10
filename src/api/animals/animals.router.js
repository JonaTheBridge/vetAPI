import Router from 'express';
import * as animalsController from './animals.controller.js';

const router = Router();

router.get('/all', animalsController.getAll);
router.get('/pagination/:page/:itemsPerPage', animalsController.getPaginated);

export default router;

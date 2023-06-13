import { Router } from 'express';
import UserController from './controllers/UserController.js'

const router = Router();

router.get('/user', UserController.index);
router.get('/user/:id', UserController.show);
router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

router.get('/:user_id/horoscopo', UserController.findHoroscope)

export default router;
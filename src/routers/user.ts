import { Router } from 'express';
import UserController from '../controllers/user';

const router = Router();

router.get('/users/:userId', UserController.getUser);
router.get('/users', UserController.getUsers);
router.post('/users', UserController.createUser);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

export default router;

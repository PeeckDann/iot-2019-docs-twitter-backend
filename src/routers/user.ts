import { Router } from 'express';
import UserController from '../controllers/user';

const router = Router();

router.get('/users/:userId', UserController.getUserById);
router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

export default router;

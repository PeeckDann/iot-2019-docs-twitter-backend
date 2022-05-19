import { Router } from 'express';
import UserController from '../controllers/user';

const router = Router();

router.get('/users/:userId', UserController.getUserById);
router.get('/users', UserController.getUsers);
router.post('/users', UserController.createUser);
router.post('/users/fill-db/csv', UserController.createUsersFromCSV);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

export default router;

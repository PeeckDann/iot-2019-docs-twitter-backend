import { Router } from 'express';
import UserController from '../controllers/user';

const router = Router();

router.put('/users/:userId/follow', UserController.followUser);
router.delete('/users/delete', UserController.deleteUser);

export default router;

import { Router } from 'express';
import FollowerController from '../controllers/follower';

const router = Router();

router.get('/followers/:userId', FollowerController.getUserFollowers);
router.get('/following/:userId', FollowerController.getUserFollowing);
router.post('/follow/:userId', FollowerController.followUser);

export default router;

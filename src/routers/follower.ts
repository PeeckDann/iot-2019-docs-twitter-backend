import { Router } from 'express';
import FollowerController from '../controllers/follower';

const router = Router();

router.get('/followers/:userId/followers', FollowerController.getUserFollowers);
router.get('/followers/:userId/following', FollowerController.getUserFollowing);
router.post('/followers/:userId/follow', FollowerController.followUser);
router.post('/followers/fill-db/csv', FollowerController.createFollowersFromCSV);

export default router;

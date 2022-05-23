import { Router } from 'express';
import LikeController from '../controllers/like';

const router = Router();

router.post('/likes/:tweetId', LikeController.likeTweet);
router.post('/likes/fill-db/csv', LikeController.createLikesFromCSV);

export default router;

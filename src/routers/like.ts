import { Router } from 'express';
import LikeController from '../controllers/like';

const router = Router();

router.get('/like/:tweetId', LikeController.likeTweet);

export default router;

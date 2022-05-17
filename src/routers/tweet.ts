import { Router } from 'express';
import TweetController from '../controllers/tweet';

const router = Router();

router.get('/tweets/:tweetId', TweetController.getTweetById);
router.get('/tweets', TweetController.getTweets);
router.post('/tweets', TweetController.createTweet);
router.put('/tweets/:tweetId', TweetController.updateTweet);
router.delete('/tweets/:tweetId', TweetController.deleteTweet);

export default router;

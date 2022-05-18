import { Router } from 'express';
import FeedController from '../controllers/feed';

const router = Router();

router.get('/feed', FeedController.getFeed);

export default router;

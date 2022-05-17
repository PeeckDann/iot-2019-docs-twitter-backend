import { Router } from 'express';

import userRouter from './user';
// import followerRouter from './follower';
import tweetRouter from './tweet';
// import likeRouter from './like';
import commentRouter from './comment';
import pollRouter from './poll';
import choiceRouter from './choice';
import chatRouter from './chat';
import messageRouter from './message';

const router = Router();

router.use(userRouter);
// router.use(followerRouter);
router.use(tweetRouter);
// router.use(likeRouter);
router.use(commentRouter);
router.use(pollRouter);
router.use(choiceRouter);
router.use(chatRouter);
router.use(messageRouter);

export default router;

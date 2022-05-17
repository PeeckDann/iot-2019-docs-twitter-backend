import { Router } from 'express';
import PollController from '../controllers/poll';

const router = Router();

router.get('/polls/:pollId', PollController.getPollById);
router.get('/polls', PollController.getAllPolls);
router.post('/polls', PollController.createPoll);
router.put('/polls/:pollId', PollController.updatePoll);
router.delete('/polls/:pollId', PollController.deletePoll);

export default router;

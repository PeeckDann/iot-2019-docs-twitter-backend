import { Router } from 'express';
import ChoiceController from '../controllers/choice';

const router = Router();

router.get('/polls/:pollId/choices/:choiceId', ChoiceController.getChoiceById);
router.get('/polls/:pollId/choices', ChoiceController.getChoices);
router.post('/polls/:pollId/choices', ChoiceController.createChoice);
router.put('/polls/:pollId/choices/:choiceId', ChoiceController.updateChoice);
router.delete('/polls/:pollId/choices/:choiceId', ChoiceController.deleteChoice);

export default router;

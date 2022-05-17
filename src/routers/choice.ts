import { Router } from 'express';
import ChoiceController from '../controllers/choice';

const router = Router();

router.get('/choices/:choiceId', ChoiceController.getChoiceById);
router.get('/choices', ChoiceController.getAllChoices);
router.post('/choices', ChoiceController.createChoice);
router.put('/choices/:choiceId', ChoiceController.updateChoice);
router.delete('/choices/:choiceId', ChoiceController.deleteChoice);

export default router;

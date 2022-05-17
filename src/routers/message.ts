import { Router } from 'express';
import MessageController from '../controllers/message';

const router = Router();

router.get('/messages/:messageId', MessageController.getMessageById);
router.get('/messages', MessageController.getAllMessages);
router.post('/messages', MessageController.createMessage);
router.put('/messages/:messageId', MessageController.updateMessage);
router.delete('/messages/:messageId', MessageController.deleteMessage);

export default router;

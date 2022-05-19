import { Router } from 'express';
import MessageController from '../controllers/message';

const router = Router();

router.get('/chats/:chatId/messages/:messageId', MessageController.getMessageById);
router.get('/chats/:chatId/messages', MessageController.getMessages);
router.post('/chats/:chatId/messages', MessageController.createMessage);
router.post('/chats/messages/fill-db/csv', MessageController.createMessagesFromCSV);
router.put('/chats/:chatId/messages/:messageId', MessageController.updateMessage);
router.delete('/chats/:chatId/messages/:messageId', MessageController.deleteMessage);

export default router;

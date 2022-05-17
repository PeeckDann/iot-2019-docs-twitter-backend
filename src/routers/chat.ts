import { Router } from 'express';
import ChatController from '../controllers/chat';

const router = Router();

router.get('/chats/:chatId', ChatController.getChatById);
router.get('/chats', ChatController.getChats);
router.post('/chats/', ChatController.createChat);
router.put('/chats/:chatId', ChatController.updateChat);
router.delete('/chats/:chatId', ChatController.deleteChat);

export default router;

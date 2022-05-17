import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import MessageDAO from '../dao/Message';

class MessageController {
  static async getMessageById(req: Request, res: Response) {
    try {
      const { messageId } = req.params;
      const message = await MessageDAO.getMessageById(messageId);
      res.send(message);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getMessages(req: Request, res: Response) {
    try {
      const { chatId } = req.params;
      const messages = await MessageDAO.getMessages(chatId);
      res.send(messages);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createMessage(req: Request, res: Response) {
    try {
      //@ts-ignore
      const currentUserId = req.user.id;
      const { chatId } = req.params;
      const newMessage = req.body;
      await MessageDAO.createMessage(currentUserId, chatId, newMessage);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updateMessage(req: Request, res: Response) {
    try {
      const { messageId } = req.params;
      const updatedMessage = req.body;
      await MessageDAO.updateMessage(messageId, updatedMessage);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteMessage(req: Request, res: Response) {
    try {
      const { messageId } = req.params;
      await MessageDAO.deleteMessage(messageId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default MessageController;

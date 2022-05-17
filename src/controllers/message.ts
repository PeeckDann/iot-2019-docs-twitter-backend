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

  static async getAllMessages(req: Request, res: Response) {
    try {
      const messages = await MessageDAO.getAllMessages();
      res.send(messages);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createMessage(req: Request, res: Response) {
    try {
      const newMessage = req.body;
      await MessageDAO.createMessage(newMessage);
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

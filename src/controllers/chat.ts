import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import ChatDAO from '../dao/chat';

class ChatController {
  static async getChatById(req: Request, res: Response) {
    try {
      const { chatId } = req.params;
      const chat = await ChatDAO.getChatById(chatId);
      res.send(chat);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getAllChats(req: Request, res: Response) {
    try {
      const chats = await ChatDAO.getAllChats();
      res.send(chats);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createChat(req: Request, res: Response) {
    try {
      const newChat = req.body;
      await ChatDAO.createChat(newChat);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updateChat(req: Request, res: Response) {
    try {
      const { chatId } = req.params;
      const updatedChat = req.body;
      await ChatDAO.updateChat(chatId, updatedChat);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteChat(req: Request, res: Response) {
    try {
      const { chatId } = req.params;
      await ChatDAO.deleteChat(chatId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default ChatController;

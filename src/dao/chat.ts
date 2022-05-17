import models from '../models';

class ChatDAO {
  static async getChatById(chatId) {
    return await models.Chat.findOne({
      where: { id: chatId },
      raw: true
    });
  }

  static async getAllChats() {
    return await models.Chat.findAll({ raw: true });
  }

  static async createChat(newChat) {
    await models.Chat.create(newChat);
  }

  static async updateChat(chatId, updatedChat) {
    await models.Chat.update(updatedChat, { where: { id: chatId } });
  }

  static async deleteChat(chatId) {
    await models.Chat.destroy({ where: { id: chatId } });
  }
}

export default ChatDAO;

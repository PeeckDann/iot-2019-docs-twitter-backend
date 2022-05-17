import models from '../models';

class ChatDAO {
  static async getChatById(chatId) {
    return await models.Chat.findOne({
      where: { id: chatId },
      raw: true
    });
  }

  static async getChats(currentUserId) {
    return await models.Chat.findAll({ where: { userId: currentUserId }, raw: true });
  }

  static async createChat(currentUserId, userId, newChat) {
    await models.Chat.create({ firstUserId: currentUserId, secondUserId: userId, newChat });
  }

  static async updateChat(chatId, updatedChat) {
    await models.Chat.update(updatedChat, { where: { id: chatId } });
  }

  static async deleteChat(chatId) {
    await models.Chat.destroy({ where: { id: chatId } });
  }
}

export default ChatDAO;

import models from '../models';
import CSVReader from '../csvUtils/csvReader';

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

  static async createChatsFromCSV() {
    await models.Chat.bulkCreate(new CSVReader().getParsedData('chat'));
  }

  static async updateChat(chatId, updatedChat) {
    await models.Chat.update(updatedChat, { where: { id: chatId } });
  }

  static async deleteChat(chatId) {
    await models.Chat.destroy({ where: { id: chatId } });
  }
}

export default ChatDAO;

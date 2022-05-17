import models from '../models';

class MessageDAO {
  static async getMessageById(messageId) {
    return await models.Message.findOne({
      where: { id: messageId },
      raw: true
    });
  }

  static async getMessages(chatId) {
    return await models.Message.findAll({ where: { chatId }, raw: true });
  }

  static async createMessage(currentUserId, chatId, newMessage) {
    await models.Message.create({ userId: currentUserId, chatId, ...newMessage });
  }

  static async updateMessage(messageId, updatedMessage) {
    await models.Message.update(updatedMessage, { where: { id: messageId } });
  }

  static async deleteMessage(messageId) {
    await models.Message.destroy({ where: { id: messageId } });
  }
}

export default MessageDAO;

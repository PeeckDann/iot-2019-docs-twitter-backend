import models from '../models';

class MessageDAO {
  static async getMessageById(messageId) {
    return await models.Message.findOne({
      where: { id: messageId },
      raw: true
    });
  }

  static async getAllMessages() {
    return await models.Message.findAll({ raw: true });
  }

  static async createMessage(newMessage) {
    await models.Message.create(newMessage);
  }

  static async updateMessage(messageId, updatedMessage) {
    await models.Message.update(updatedMessage, { where: { id: messageId } });
  }

  static async deleteMessage(messageId) {
    await models.Message.destroy({ where: { id: messageId } });
  }
}

export default MessageDAO;

import models from '../models';

class UserDAO {
  static async getUserById(userId) {
    return await models.User.findOne({
      where: { id: userId },
      raw: true
    });
  }

  static async getAllUsers() {
    return await models.User.findAll({ raw: true });
  }

  static async createUser(newUser) {
    await models.User.create(newUser);
  }

  static async updateUser(userId, updatedUser) {
    await models.User.update(updatedUser, { where: { id: userId } });
  }

  static async deleteUser(userId) {
    await models.User.destroy({ where: { id: userId } });
  }
}

export default UserDAO;

// import models from '../models';
import models from '../models';

class UserDAO {
  static async deleteUser(userId) {
    await models.User.destroy({ where: { id: userId } });
  }
  static async updateUserFollowing(userId) {
    // TODO: finish
  }
  static async updateUserFollowers(userId) {
    // TODO: finish
  }
}

export default UserDAO;

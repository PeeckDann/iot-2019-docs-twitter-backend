// import models from '../models';
import User from '../models/user';

class UserDAO {
  static async deleteUser(userId) {
    await User.destroy({ where: { id: userId } });
  }
  static async updateUserFollowing(userId) {
    // TODO: finish
  }
  static async updateUserFollowers(userId) {
    // TODO: finish
  }
}

export default UserDAO;

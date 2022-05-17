import models from '../models';
import UserDAO from './user';
import { CustomError } from '../utils/errorHandler';

class FollowerDAO {
  static async getAllFollowers(currentUserId) {
    return await models.Follower.findAll({
      where: { followed: currentUserId },
      raw: true
    });
  }

  static async getAllFollowing(currentUserId) {
    return await models.Follower.findAll({
      where: { following: currentUserId },
      raw: true
    });
  }

  static async getFollowerByUserIds(currentUserId, userId) {
    return await models.Follower.findOne({
      where: { follower: currentUserId, followed: userId },
      raw: true
    });
  }

  static async createFollower(currentUserId, userId) {
    const currentUser = await UserDAO.getUserById(currentUserId);
    const user = await UserDAO.getUserById(userId);

    if (!currentUser || !user) {
      throw new CustomError('Something went wrong!');
    }

    await models.Follower.create(
      {
        follower: currentUser,
        followed: user
      },
      { include: [{ model: models.User }] }
    );
  }

  static async deleteFollower(followerId) {
    await models.Follower.destroy({
      where: { id: followerId }
    });
  }
}

export default FollowerDAO;

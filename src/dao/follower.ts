import models from '../models';

class FollowerDAO {
  static async getFollowers(currentUserId) {
    return await models.Follower.findAll({
      where: { followed: currentUserId },
      raw: true
    });
  }

  static async getFollowing(currentUserId) {
    return await models.Follower.findAll({
      where: { following: currentUserId },
      raw: true
    });
  }

  static async getFollowerByUserIds(currentUserId, userId) {
    return await models.Follower.findOne({
      where: { followerId: currentUserId, followedId: userId },
      raw: true
    });
  }

  static async createFollower(currentUserId, userId) {
    await models.Follower.create({
      followerId: currentUserId,
      followedId: userId
    });
  }

  static async deleteFollower(followerId) {
    await models.Follower.destroy({
      where: { id: followerId }
    });
  }
}

export default FollowerDAO;

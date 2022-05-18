import models from '../models';

class LikeDAO {
  static async getLikeByUserAndTweetIds(currentUserId, tweetId) {
    return await models.Like.findOne({
      where: { userId: currentUserId, tweetId },
      raw: true
    });
  }

  static async createLike(currentUserId, tweetId) {
    await models.Like.create({ userId: currentUserId, tweetId });
  }

  static async deleteLike(likeId) {
    await models.Like.destroy({
      where: { id: likeId }
    });
  }
}

export default LikeDAO;

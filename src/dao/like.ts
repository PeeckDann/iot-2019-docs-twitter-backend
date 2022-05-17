import models from '../models';
import UserDAO from './user';
import TweetDAO from './tweet';

import { CustomError } from '../utils/errorHandler';

class LikeDAO {
  static async getLikeByUserAndTweetIds(currentUserId, tweetId) {
    return await models.Like.findOne({
      where: { userId: currentUserId, tweetId },
      raw: true
    });
  }

  static async createLike(currentUserId, tweetId) {
    const currentUser = await UserDAO.getUserById(currentUserId);
    const tweet = await TweetDAO.getTweetById(tweetId);

    if (!currentUser || !tweet) {
      throw new CustomError('Something went wrong!');
    }

    await models.Like.create(
      { user: currentUser, tweet },
      { include: [{ model: models.User }, { model: models.Tweet }] }
    );
  }

  static async deleteLike(likeId) {
    await models.Like.destroy({
      where: { id: likeId }
    });
  }
}

export default LikeDAO;

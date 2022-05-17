import models from '../models';

class TweetDAO {
  static async getTweetById(tweetId) {
    return await models.Tweet.findOne({
      where: { id: tweetId },
      raw: true
    });
  }

  static async getTweets(currentUserId) {
    return await models.Tweet.findAll({ where: { userId: currentUserId }, raw: true });
  }

  static async createTweet(currentUserId, newTweet) {
    await models.Tweet.create({ userId: currentUserId, ...newTweet });
  }

  static async updateTweet(tweetId, updatedTweet) {
    await models.Tweet.update(updatedTweet, { where: { id: tweetId } });
  }

  static async deleteTweet(tweetId) {
    await models.Tweet.destroy({ where: { id: tweetId } });
  }
}

export default TweetDAO;

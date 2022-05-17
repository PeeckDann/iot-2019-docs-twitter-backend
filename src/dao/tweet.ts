import models from '../models';

class TweetDAO {
  static async getTweetById(tweetId) {
    return await models.Tweet.findOne({
      where: { id: tweetId },
      raw: true
    });
  }

  static async getAllTweets() {
    return await models.Tweet.findAll({ raw: true });
  }

  static async createTweet(newTweet) {
    await models.Tweet.create(newTweet);
  }

  static async updateTweet(tweetId, updatedTweet) {
    await models.Tweet.update(updatedTweet, { where: { id: tweetId } });
  }

  static async deleteTweet(tweetId) {
    await models.Tweet.destroy({ where: { id: tweetId } });
  }
}

export default TweetDAO;

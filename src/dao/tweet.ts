import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class TweetDAO {
  static async getTweetById(tweetId) {
    return await models.Tweet.findOne({
      where: { id: tweetId },
      raw: true
    });
  }

  static async getTweets(currentUserId) {
    const tweetInstances = await models.Tweet.findAll({
      where: { userId: currentUserId },
      include: { all: true, nested: true }
    });
    return tweetInstances.map((tweetInstance) => {
      return tweetInstance.get({ plain: true });
    });
  }

  static async createTweet(currentUserId, newTweet) {
    await models.Tweet.create({ userId: currentUserId, ...newTweet });
  }

  static async createTweetsFromCSV() {
    await models.Tweet.bulkCreate(new CSVReader().getParsedData('tweet'));
  }

  static async updateTweet(tweetId, updatedTweet) {
    await models.Tweet.update(updatedTweet, { where: { id: tweetId } });
  }

  static async deleteTweet(tweetId) {
    await models.Tweet.destroy({ where: { id: tweetId } });
  }
}

export default TweetDAO;

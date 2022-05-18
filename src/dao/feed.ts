import models from '../models';

class FeedDAO {
  static async getFeed() {
    const tweets = await models.Tweet.findAll({ raw: true });
    const polls = await models.Poll.findAll({ raw: true });

    const feed = [...tweets, ...polls].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return feed;
  }
}

export default FeedDAO;

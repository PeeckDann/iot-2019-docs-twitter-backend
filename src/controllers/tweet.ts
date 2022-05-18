import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import TweetDAO from '../dao/tweet';

class TweetController {
  static async getTweetById(req: Request, res: Response) {
    try {
      const { tweetId } = req.params;
      const tweet = await TweetDAO.getTweetById(tweetId);
      res.send(tweet);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getTweets(req: Request, res: Response) {
    try {
      //@ts-ignore
      const currentUserId = req.user.id;
      const tweets = await TweetDAO.getTweets(currentUserId);
      res.send(tweets);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createTweet(req: Request, res: Response) {
    try {
      //@ts-ignore
      const currentUserId = req.user.id;
      const newTweet = req.body;
      await TweetDAO.createTweet(currentUserId, newTweet);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updateTweet(req: Request, res: Response) {
    try {
      const { tweetId } = req.params;
      const updatedTweet = req.body;
      await TweetDAO.updateTweet(tweetId, updatedTweet);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteTweet(req: Request, res: Response) {
    try {
      const { tweetId } = req.params;
      await TweetDAO.deleteTweet(tweetId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default TweetController;

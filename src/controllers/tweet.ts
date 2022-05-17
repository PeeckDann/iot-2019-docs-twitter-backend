import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import TweetDAO from '../dao/Tweet';

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

  static async getAllTweets(req: Request, res: Response) {
    try {
      const tweets = await TweetDAO.getAllTweets();
      res.send(tweets);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createTweet(req: Request, res: Response) {
    try {
      const newTweet = req.body;
      await TweetDAO.createTweet(newTweet);
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

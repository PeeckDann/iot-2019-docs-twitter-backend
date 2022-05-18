import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import FeedDAO from '../dao/feed';

class FeedController {
  static async getFeed(req: Request, res: Response) {
    try {
      const feed = await FeedDAO.getFeed();
      res.send(feed);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default FeedController;

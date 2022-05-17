import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import LikeDAO from '../dao/like';

class LikeController {
  static async likeTweet(req: Request, res: Response) {
    try {
      //@ts-ignore
      const currentUserId = req.user.id;
      const { tweetId } = req.params;
      const like = await LikeDAO.getLikeByUserAndTweetIds(currentUserId, tweetId);

      if (!like) {
        await LikeDAO.createLike(currentUserId, tweetId);
        res.sendStatus(201);
      } else {
        await LikeDAO.deleteLike(like.id);
        res.sendStatus(200);
      }
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default LikeController;

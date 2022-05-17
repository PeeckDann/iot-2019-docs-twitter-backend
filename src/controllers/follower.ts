import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import FollowerDAO from '../dao/Follower';

class FollowerController {
  static async getUserFollowers(req: Request, res: Response) {
    try {
      //@ts-ignore
      const currentUserId = req.user.id;
      const followers = await FollowerDAO.getAllFollowers(currentUserId);
      res.send(followers);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getUserFollowing(req: Request, res: Response) {
    try {
      //@ts-ignore
      const currentUserId = req.user.id;
      const following = await FollowerDAO.getAllFollowing(currentUserId);
      res.send(following);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async followUser(req: Request, res: Response) {
    try {
      //@ts-ignore
      const currentUserId = req.user.id;
      const { userId } = req.params;
      const follower = await FollowerDAO.getFollowerByUserIds(currentUserId, userId);

      if (!follower) {
        await FollowerDAO.createFollower(currentUserId, userId);
        res.sendStatus(201);
      } else {
        await FollowerDAO.deleteFollower(follower.id);
        res.sendStatus(200);
      }
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default FollowerController;

import { handleEndpointError } from '../utils/errorHandler';
import UserDAO from '../dao/user';

class UserController {
  static async followUser(req, res) {
    try {
      const currentUserId = req.user.id;
      const followedUserId = req.params.userId;
      await Promise.all([UserDAO.updateUserFollowing(currentUserId), UserDAO.updateUserFollowers(followedUserId)]);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteUser(req, res) {
    try {
      const currentUserId = req.user.id;
      await UserDAO.deleteUser(currentUserId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default UserController;

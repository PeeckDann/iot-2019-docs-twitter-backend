import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import UserDAO from '../dao/user';

class UserController {
  static async getUserById(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const user = await UserDAO.getUserById(userId);
      res.send(user);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const users = await UserDAO.getUsers();
      res.send(users);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const newUser = req.body;
      await UserDAO.createUser(newUser);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const updatedUser = req.body;
      await UserDAO.updateUser(userId, updatedUser);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      await UserDAO.deleteUser(userId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default UserController;

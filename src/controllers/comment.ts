import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import CommentDAO from '../dao/comment';

class CommentController {
  static async getCommentById(req: Request, res: Response) {
    try {
      const { commentId } = req.params;
      const comment = await CommentDAO.getCommentById(commentId);
      res.send(comment);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getComments(req: Request, res: Response) {
    try {
      const { tweetId } = req.params;
      const comments = await CommentDAO.getComments(tweetId);
      res.send(comments);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createComment(req: Request, res: Response) {
    try {
      //@ts-ignore
      const currentUserId = req.user.id;
      const { tweetId } = req.params;
      const newComment = req.body;
      await CommentDAO.createComment(currentUserId, tweetId, newComment);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updateComment(req: Request, res: Response) {
    try {
      const { commentId } = req.params;
      const updatedComment = req.body;
      await CommentDAO.updateComment(commentId, updatedComment);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteComment(req: Request, res: Response) {
    try {
      const { commentId } = req.params;
      await CommentDAO.deleteComment(commentId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default CommentController;

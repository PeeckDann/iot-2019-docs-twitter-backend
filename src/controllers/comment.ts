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

  static async getAllComments(req: Request, res: Response) {
    try {
      const comments = await CommentDAO.getAllComments();
      res.send(comments);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createComment(req: Request, res: Response) {
    try {
      const newComment = req.body;
      await CommentDAO.createComment(newComment);
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

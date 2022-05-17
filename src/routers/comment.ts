import { Router } from 'express';
import CommentController from '../controllers/comment';

const router = Router();

router.get('tweets/:tweetId/comments/:commentId', CommentController.getCommentById);
router.get('tweets/:tweetId/comments', CommentController.getComments);
router.post('tweets/:tweetId/comments', CommentController.createComment);
router.put('tweets/:tweetId/comments/:commentId', CommentController.updateComment);
router.delete('tweets/:tweetId/comments/:commentId', CommentController.deleteComment);

export default router;

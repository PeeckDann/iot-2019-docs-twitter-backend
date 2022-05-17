import { Router } from 'express';
import CommentController from '../controllers/comment';

const router = Router();

router.get('/comments/:commentId', CommentController.getCommentById);
router.get('/comments', CommentController.getAllComments);
router.post('/comments', CommentController.createComment);
router.put('/comments/:commentId', CommentController.updateComment);
router.delete('/comments/:commentId', CommentController.deleteComment);

export default router;

import models from '../models';

class CommentDAO {
  static async getCommentById(commentId) {
    return await models.Comment.findOne({
      where: { id: commentId },
      raw: true
    });
  }

  static async getAllComments() {
    return await models.Comment.findAll({ raw: true });
  }

  static async createComment(newComment) {
    await models.Comment.create(newComment);
  }

  static async updateComment(commentId, updatedComment) {
    await models.Comment.update(updatedComment, { where: { id: commentId } });
  }

  static async deleteComment(commentId) {
    await models.Comment.destroy({ where: { id: commentId } });
  }
}

export default CommentDAO;

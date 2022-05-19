import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class CommentDAO {
  static async getCommentById(commentId) {
    return await models.Comment.findOne({
      where: { id: commentId },
      raw: true
    });
  }

  static async getComments(tweetId) {
    return await models.Comment.findAll({ where: { tweetId }, raw: true });
  }

  static async createComment(currentUserId, tweetId, newComment) {
    await models.Comment.create({ userId: currentUserId, tweetId, ...newComment });
  }

  static async createCommentsFromCSV() {
    await models.Comment.bulkCreate(new CSVReader().getParsedData('comment'));
  }

  static async updateComment(commentId, updatedComment) {
    await models.Comment.update(updatedComment, { where: { id: commentId } });
  }

  static async deleteComment(commentId) {
    await models.Comment.destroy({ where: { id: commentId } });
  }
}

export default CommentDAO;

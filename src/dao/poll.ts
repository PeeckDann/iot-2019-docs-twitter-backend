import models from '../models';

class PollDAO {
  static async getPollById(pollId) {
    return await models.Poll.findOne({
      where: { id: pollId },
      raw: true
    });
  }

  static async getAllPolls() {
    return await models.Poll.findAll({ raw: true });
  }

  static async createPoll(newPoll) {
    await models.Poll.create(newPoll);
  }

  static async updatePoll(pollId, updatedPoll) {
    await models.Poll.update(updatedPoll, { where: { id: pollId } });
  }

  static async deletePoll(pollId) {
    await models.Poll.destroy({ where: { id: pollId } });
  }
}

export default PollDAO;

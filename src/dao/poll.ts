import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class PollDAO {
  static async getPollById(pollId) {
    return await models.Poll.findOne({
      where: { id: pollId },
      raw: true
    });
  }

  static async getPolls(currentUserId) {
    return await models.Poll.findAll({ where: { userId: currentUserId }, raw: true });
  }

  static async createPoll(currentUserId, newPoll) {
    await models.Poll.create({ userId: currentUserId, ...newPoll });
  }

  static async createPollsFromCSV() {
    await models.Poll.bulkCreate(new CSVReader().getParsedData('poll'));
  }

  static async updatePoll(pollId, updatedPoll) {
    await models.Poll.update(updatedPoll, { where: { id: pollId } });
  }

  static async deletePoll(pollId) {
    await models.Poll.destroy({ where: { id: pollId } });
  }
}

export default PollDAO;

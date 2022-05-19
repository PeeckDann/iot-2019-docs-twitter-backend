import models from '../models';
import CSVReader from '../csvUtils/csvReader';

class ChoiceDAO {
  static async getChoiceById(choiceId) {
    return await models.Choice.findOne({
      where: { id: choiceId },
      raw: true
    });
  }

  static async getChoices(pollId) {
    return await models.Choice.findAll({ where: { pollId }, raw: true });
  }

  static async createChoice(pollId, newChoice) {
    await models.Choice.create({ pollId, ...newChoice });
  }

  static async createChoicesFromCSV() {
    await models.Choice.bulkCreate(new CSVReader().getParsedData('choice'));
  }

  static async updateChoice(choiceId, updatedChoice) {
    await models.Choice.update(updatedChoice, { where: { id: choiceId } });
  }

  static async deleteChoice(choiceId) {
    await models.Choice.destroy({ where: { id: choiceId } });
  }
}

export default ChoiceDAO;

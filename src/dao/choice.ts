import models from '../models';

class ChoiceDAO {
  static async getChoiceById(choiceId) {
    return await models.Choice.findOne({
      where: { id: choiceId },
      raw: true
    });
  }

  static async getAllChoices() {
    return await models.Choice.findAll({ raw: true });
  }

  static async createChoice(newChoice) {
    await models.Choice.create(newChoice);
  }

  static async updateChoice(choiceId, updatedChoice) {
    await models.Choice.update(updatedChoice, { where: { id: choiceId } });
  }

  static async deleteChoice(choiceId) {
    await models.Choice.destroy({ where: { id: choiceId } });
  }
}

export default ChoiceDAO;

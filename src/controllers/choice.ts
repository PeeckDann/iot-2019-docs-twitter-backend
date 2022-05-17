import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import ChoiceDAO from '../dao/Choice';

class ChoiceController {
  static async getChoiceById(req: Request, res: Response) {
    try {
      const { choiceId } = req.params;
      const choice = await ChoiceDAO.getChoiceById(choiceId);
      res.send(choice);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getChoices(req: Request, res: Response) {
    try {
      const { pollId } = req.params;
      const choices = await ChoiceDAO.getChoices(pollId);
      res.send(choices);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createChoice(req: Request, res: Response) {
    try {
      const { pollId } = req.params;
      const newChoice = req.body;
      await ChoiceDAO.createChoice(pollId, newChoice);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updateChoice(req: Request, res: Response) {
    try {
      const { choiceId } = req.params;
      const updatedChoice = req.body;
      await ChoiceDAO.updateChoice(choiceId, updatedChoice);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deleteChoice(req: Request, res: Response) {
    try {
      const { choiceId } = req.params;
      await ChoiceDAO.deleteChoice(choiceId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default ChoiceController;

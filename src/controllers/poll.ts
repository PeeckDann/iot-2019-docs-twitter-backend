import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import PollDAO from '../dao/Poll';

class PollController {
  static async getPollById(req: Request, res: Response) {
    try {
      const { pollId } = req.params;
      const poll = await PollDAO.getPollById(pollId);
      res.send(poll);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async getAllPolls(req: Request, res: Response) {
    try {
      const polls = await PollDAO.getAllPolls();
      res.send(polls);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createPoll(req: Request, res: Response) {
    try {
      const newPoll = req.body;
      await PollDAO.createPoll(newPoll);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async updatePoll(req: Request, res: Response) {
    try {
      const { pollId } = req.params;
      const updatedPoll = req.body;
      await PollDAO.updatePoll(pollId, updatedPoll);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async deletePoll(req: Request, res: Response) {
    try {
      const { pollId } = req.params;
      await PollDAO.deletePoll(pollId);
      res.sendStatus(200);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }
}

export default PollController;

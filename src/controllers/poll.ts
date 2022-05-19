import { Request, Response } from 'express';
import { handleEndpointError } from '../utils/errorHandler';
import PollDAO from '../dao/poll';

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

  static async getPolls(req: Request, res: Response) {
    try {
      //@ts-ignore
      const currentUserId = req.user.id;
      const polls = await PollDAO.getPolls(currentUserId);
      res.send(polls);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createPoll(req: Request, res: Response) {
    try {
      //@ts-ignore
      const currentUserId = req.user.id;
      const newPoll = req.body;
      await PollDAO.createPoll(currentUserId, newPoll);
      res.sendStatus(201);
    } catch (e) {
      handleEndpointError(e, res);
    }
  }

  static async createPollsFromCSV(req: Request, res: Response) {
    try {
      await PollDAO.createPollsFromCSV();
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

import express from 'express';
import prisma from '../database';

import ResponseController from '../controllers/responseController';

const responseController = new ResponseController(prisma);

const router = express.Router();

router.get('/today', async (req, res) => {
  const response = await responseController.getAllToday()

  res.status(200).json(response)
});

router.get('/:responseId', async (req, res) => {
  const responseId = req.params.responseId;
  if (!responseId) throw new Error('Response ID is required');

  const response = await responseController.get(responseId)

  res.status(200).json(response)
});

router.post('/:userId', async (req, res) => {
  const userId = req.params.userId;
  if (!userId) throw new Error('User ID is required');

  const text = req.body.text;
  if (!text) throw new Error('Text is required');

  const response = await responseController.post(userId, text)
  
  res.status(200).json(response)
});

export default router;
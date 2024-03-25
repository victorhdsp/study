import express from 'express';
import prisma from '../database';

import MessageController from '../controllers/messageController';

const messageController = new MessageController(prisma);

const router = express.Router();

router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  if (!userId) throw new Error('User ID is required');

  const response = await messageController.get(userId)

  res.status(200).json(response)
});

router.put('/:userId', async (req, res) => {
  const userId = req.params.userId;
  if (!userId) throw new Error('User ID is required');

  const text = req.body.text;
  if (!text) throw new Error('Text is required');
  
  const response = await messageController.select(userId, text)
  
  res.status(200).json(response)
});

router.post('/:userId', async (req, res) => {
  const userId = req.params.userId;
  if (!userId) throw new Error('User ID is required');

  const text = req.body.text;
  if (!text) throw new Error('Text is required');
  
  const response = await messageController.post(userId, text)
  
  res.status(200).json(response)
});

export default router;
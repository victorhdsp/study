import express from 'express';
import prisma from '../database';
import UserController from '../controllers/userController';

const userController = new UserController(prisma);

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await userController.getAll()
  res.status(200).json(users)
});

router.post('/', async (req, res) => {
  const username = req.body.username;
  const user = await userController.post(username)

  res.status(201).json(user)
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await userController.get(userId)

  res.status(200).json(user)
});

router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const username = req.body.username;
  const user = await userController.put(userId, username)
  
  res.status(200).json(user)
});

router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await userController.delete(userId)

  res.status(204).json(user)
});

export default router;

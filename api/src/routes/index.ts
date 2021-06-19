import { Router } from 'express';
import user from './user';
import postRouter from './todo';

const router = Router();

router.use('/user', user);
router.use('/todo', postRouter);

export default router;

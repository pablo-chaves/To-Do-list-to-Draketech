import { Router } from 'express';
import user from './user';
import todo from './todo';
import controlToken from '../middleware/controlToken';

const router = Router();

router.use('/user', user);
router.use('/todo', controlToken, todo);

export default router;

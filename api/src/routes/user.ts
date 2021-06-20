const router = require('express').Router();
import  { login, register, getUser } from '../controllers/User';
import middlewareError from '../middleware/middlewareError';

router.route('/:id')
  .get(middlewareError(getUser));
router.route('/register')
  .post(middlewareError(register));
router.route('/login')
  .post(middlewareError(login));

export default router;

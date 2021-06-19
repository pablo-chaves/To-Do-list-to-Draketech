const router = require('express').Router();
import  { login, register } from '../controllers/User';
import middlewareError from '../middleware/middlewareError';

//   .post(middlewareError(addUser))
router.route('/register')
  .post(middlewareError(register));
router.route('/login')
  .post(middlewareError(login));

export default router;

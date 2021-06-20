const router = require('express').Router();
import { createTodo, getTodo, updateTodo, deleteTodo } from '../controllers/todo.js';
import  middlewareError from '../middleware/middlewareError';

router
  .route('/')
  .get(middlewareError(getTodo))
  .post(middlewareError(createTodo));
router
  .route('/:id')
  .put(middlewareError(updateTodo))
  .delete(middlewareError(deleteTodo));

export default router;

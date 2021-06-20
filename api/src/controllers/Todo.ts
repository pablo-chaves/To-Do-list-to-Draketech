import db from '../db.js';
import verify from '../middleware/verify';

export async function createTodo(req: any, res: any) {
  await db.Todo.create(req.body)
  res.json({message: 'To-Do created successfully'})
}

export async function getTodo(req: any, res: any) {
  const verifyToken: any = verify(req.token);
  if(verifyToken.id) {
    const id: string = verifyToken.id;
    let search: any = await db.Todo.findAll({where: {UserId: id}});
    res.json(search)
  } else {
    res.sendStatus(403);
  }
}

export async function updateTodo(req: any, res: any) {
  const verifyToken: any = verify(req.token);
  if(verifyToken.id) {
    const { id } = req.params;
    const upDateTodo: any = {
      title: req.body.title,
      status: req.body.status,
    };
    const todo: any = await db.Todo.findByPk(id);
    await todo.update(upDateTodo);
    await todo.save();
    return res.json({ message: `updated: ${todo.dataValues.title}` });
  } else {
    res.sendStatus(403);
  }
}

export async function deleteTodo(req: any, res: any) {
  const verifyToken: any = verify(req.token);
  if(verifyToken.id) {
    const { id } = req.params;
    const todo: any = await db.Todo.findByPk(id);
    await todo.destroy();
    return res.json({ message: `deleted: ${todo.dataValues.title}` });
  } else {
    res.sendStatus(403);
  }
}

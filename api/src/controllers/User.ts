import db from '../db.js';
import { v4 as uuidv4 } from 'uuid';
import * as jwt from 'jsonwebtoken';

export async function login(req: any, res: any) {
  const { TOKEN } = process.env;
  const id: string = req.body.id;
  const email: string = req.body.email;
  const password: string = req.body.password;
  const userDb: any = await db.User.findByPk(id);
  const user = userDb.dataValues;
  if(user.email === email && user.password === password) {
    const token: string = jwt.sign({id}, TOKEN);
    res.send(token);
  } else {
    res.sendStatus(403);
  }
}

export async function register(req: any, res: any) {
    const id: string = uuidv4();
    interface obj {
      id: string;
      title: string;
      status: string;
    }
    const user: obj = {...req.body, id};
    await db.User.create(user);
    res.json(user);
}

export async function logout(req: any, res: any) {
    await db.User.create(req.body)
    res.send(req.body)
}

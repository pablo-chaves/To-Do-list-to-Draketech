import db from '../db.js';
import { v4 as uuidv4 } from 'uuid';
import * as jwt from 'jsonwebtoken';

export async function login(req: any, res: any) {
  const { TOKEN } = process.env;
  const email: string = req.body.email;
  const password: string = (req.body.password + '');
  const userDb: any = await db.User.findOne({where: {email}});
  const user = userDb.dataValues;
  const id: string = user.id;
  if(user.email === email && user.password === password) {
    const token: string = jwt.sign({id}, TOKEN);
    res.json({...user, token});
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

export async function getUser(req: any, res: any) {
    const { id } = req.params;
    res.json(await db.User.findByPk(id));
}

import db from '../db.js';

export async function login(req: any, res: any) {
  res.send('soy un login')
}

export async function register(req: any, res: any) {
    await db.User.create(req.body)
    res.send(req.body)
}

export async function logout(req: any, res: any) {
    await db.User.create(req.body)
    res.send(req.body)
}

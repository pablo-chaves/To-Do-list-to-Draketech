
const controlToken = (req: any, res: any, next: any) => {
  const bearerHeader = req.headers['authorization'];
  if(bearerHeader) {
    const head: string[] = bearerHeader.split(' ');
    req.token = head[1];
    next();
  } else {
    res.sendStatus(403);
  }
}

export default controlToken;

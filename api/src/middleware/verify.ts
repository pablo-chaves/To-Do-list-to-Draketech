import * as jwt from 'jsonwebtoken';
const { TOKEN } = process.env;

const verify = (token: string) => {
  let result: boolean | object = false;
  jwt.verify(token, TOKEN, (err: any, data: any) => {
    if(!err) result = data;
  })
  return result;
}

export default verify;

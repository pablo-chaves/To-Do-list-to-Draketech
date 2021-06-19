const errorHandler = function (err: any, req: any, res: any) {
  console.log('err.message: ', err);
  res.status(500).send('an error occurred on the server..');
};

export default errorHandler;

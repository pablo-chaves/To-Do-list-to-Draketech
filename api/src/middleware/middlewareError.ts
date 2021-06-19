const errorMiddleware = (handlerRoute: any) => {
  return async (req: any, res: any, next: any) => {
    try {
      await handlerRoute(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default errorMiddleware;

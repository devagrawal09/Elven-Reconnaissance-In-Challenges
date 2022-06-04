import { NextFunction, Router, Request, Response } from 'express';

class IndexRoute {
  public path = '/';
  public router = Router();

  constructor() {
    this.router.get(`${this.path}`, (req: Request, res: Response, next: NextFunction) => {
      try {
        res.sendStatus(200);
      } catch (error) {
        next(error);
      }
    });
  }
}

export default IndexRoute;

import { Request, Response, NextFunction } from 'express';
import Base from '../classes/controllers/base';

const controller = async (req: Request, res: Response, next: NextFunction, fn: (req: Request) => Promise<any>) => {
  const c = new Base(req, res, next);
  return c.execute(fn);
};

export default controller;

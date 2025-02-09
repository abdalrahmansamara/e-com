import { Request, Response, NextFunction } from 'express';
import { exceptions } from '../errors';
import HttpStatus from 'http-status-codes';

class Base {
  req: Request;
  res: Response;
  next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async execute(fn: (req: Request) => Promise<any>) {
    const { method } = this.req;
    let status = HttpStatus.OK;

    switch (method.toUpperCase()) {
      case 'POST':
        status = HttpStatus.CREATED;
        break;
      case 'DELETE':
        status = HttpStatus.NO_CONTENT;
        break;
      default:
        break;
    }

    try {
      const result = await fn(this.req);
      if (!result) throw exceptions.notFoundRequest;

      return this.res.status(status).send(result);
    } catch (e) {
      return this.next(e);
    }
  }
}

export default Base;

import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../classes/errors';
import { ValidationError } from 'yup'
import HttpStatus from 'http-status-codes';

interface ErrorHandler extends Error {
  code?: number;
  status?: number;
  explanation?: string;
  details?: any;
  errors?: any[];
}

const errorHandler = (e: ErrorHandler | null, req: Request, res: Response, next: NextFunction): void => {
  if (!e) return next();

  const payload = {
    path: req.path,
    method: req.method,
    query: req.query,
    body: req.body,
  };

  let err: any = {};
  // [
  //   'value',  'path',
  //   'type',   'params',
  //   'errors', 'inner',
  //   'name',   'message'
  // ]
  switch (true) {
    case e instanceof ValidationError: {
      err.message = e.message;
      err.name = e.name;
      err.code = 1120;
      err.stack = e.path;
      err.status = HttpStatus.UNPROCESSABLE_ENTITY;
      err.errors = e.inner.length > 0
      ? e.inner.reduce((acc: any, curVal: any) => {
        acc[`${curVal.path}`] = curVal.message || curVal.type
        return acc
      }, {})
      : { [`${e.path}`]: e.message || e.type }
      break;
    }
    case e instanceof CustomError:
    default: {
      err.message = e.message;
      err.name = e.name;
      err.code = e.code;
      err.stack = e.stack;
      err.status = e.status || HttpStatus.INTERNAL_SERVER_ERROR;
      err.explanation = e.details || e.explanation;
      err.errors = e.errors;
      break;
    }
  }

  if (err.status >= HttpStatus.INTERNAL_SERVER_ERROR) {
    Log.error(err.message, err, payload, 'errorHandler');
  } else {
    Log.info(err.message, err, payload, 'errorHandler');
  }

  res.status(err.status).json(err);
};

export { errorHandler };

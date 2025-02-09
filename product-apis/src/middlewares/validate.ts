import { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';

const validate = (schema: Yup.ObjectSchema<any>) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const validatedData = await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
          headers: req.headers,
        },
        { abortEarly: false, stripUnknown: true }
      );

      // Assign the validated data back to req.query
      req.query = validatedData.query;

      next();
    } catch (err: any) {
      next(err)
      // res.status(400).json({ errors: err.errors });
    }
  };
};

export default validate;

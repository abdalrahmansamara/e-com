import { NextFunction, Request, Response } from 'express'
import { EmptyResultError, BaseError, ValidationError } from 'sequelize'
import { get } from 'lodash'

function msg(message: string) {
  return `Sequelize Error: ${message}`
}

async function ExpressErrorSequelize(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  if (err instanceof BaseError) {
    if (err instanceof EmptyResultError) {
      return res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        message: msg('Data not found'),
      })
    }

    if (err instanceof ValidationError) {
      console.log('ERROR SEQUELIZE VALIDATION!!!')
      const errors: any[] = get(err, 'errors', [])
      const errorMessage = get(errors, '0.message', null)

      const dataError = {
        code: HttpStatus.BAD_REQUEST,
        message: errorMessage
          ? `Validation error: ${errorMessage}`
          : err.message,
        errors: errors.reduce<any>((acc, curVal) => {
          acc[curVal.path] = curVal.message
          return acc
        }, {}),
      }

      console.log(dataError.message, dataError.errors)

      return res.status(HttpStatus.BAD_REQUEST).json(dataError)
    }

    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: msg(err.message),
    })
  }

  next(err)
}

export default ExpressErrorSequelize

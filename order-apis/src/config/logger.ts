import winston from 'winston'
import path from 'path'
import { createNamespace, getNamespace } from 'cls-hooked'
import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import dateHelpers from '../helpers/dateHelpers';

// Create a namespace for request-specific data
const requestNamespace = createNamespace('request')

// Winston log format with automatic `requestId`
const logFormat = winston.format.printf(({ timestamp, level, message, ...meta }) => {
  const requestId = getNamespace('request')?.get('requestId') || 'N/A'

  let logMessage = `level [${level.toUpperCase()}]: message: ${message}, timestamp: ${timestamp}, request_id: ${requestId}`;

  // If there are additional fields (meta), log them as well
  if (Object.keys(meta).length) {
    logMessage += `, meta: ${JSON.stringify(meta)}`
  }

  return logMessage;
})

const options = {
  file: {
    level: 'error', // error, warn, info, http, verbose, debug, silly
    filename: `${path.resolve('./logs')}/log-${dateHelpers.formatDate(new Date())}.log`,
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      logFormat
    ),
    handleExceptions: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      logFormat
    ),
  },
}

// Winston logger configuration
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    new winston.transports.Console(options.console),
    // new winston.transports.File(options.file),
  ],
})

// Middleware to attach `requestId` to CLS context
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  requestNamespace.run(() => {
    requestNamespace.set('requestId', req.headers['x-request-id'] || req.id || req.requestId || generateRequestId())
    next()
  })
}

// Generate a request ID if not provided
const generateRequestId = () => {
  return uuidv4()
}

export default logger

import "./config"
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import hpp from 'hpp'
import helmet from 'helmet'
import userAgent from 'express-useragent'
import requestIp from 'request-ip'

import logger, { requestLogger } from './config/logger'
import ExpressErrorSequelize from './middlewares/ExpressErrorSequelize'
import ExpressAutoHandleTransaction from './middlewares/ExpressAutoHandleTransaction'
import { errorHandler } from './middlewares/errorHandler';
import { router } from './routes'

import withState from './helpers/withState'

const app = express()

app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(userAgent.express())
app.use(requestIp.mw())
app.use(express.json())

app.use((req: Request, res, next) => {
  new withState(req)
  next()
})

app.use(requestLogger)


async function handleRollbackTransaction(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await req.rollbackTransactions()
    // eslint-disable-next-line no-empty
  } catch (e) { }
  next(err)
}

app.use(router)
app.use('/v1', handleRollbackTransaction)
app.use('/v1', ExpressErrorSequelize)
app.use('/v1', ExpressAutoHandleTransaction)
app.use('/v1', errorHandler)



app.listen(process.env.PORT || 3001, () => {
  logger.info('Server started on port 3001')
})

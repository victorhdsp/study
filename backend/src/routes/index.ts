import { Express } from "express"

import userRouter from './user.routes'
import responseRouter from './response.routes'
import messageRouter from './message.routes'

const router = (app: Express) => {
  app.use('/users', userRouter)
  app.use('/responses', responseRouter)
  app.use('/messages', messageRouter)
}

export default router
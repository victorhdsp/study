import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'

import './database'
import router from './routes'

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000

router(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app
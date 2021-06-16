import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes'

import errorsHandler from './errors'

dotenv.config({
  path: '.env.test'
})
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.use(errorsHandler)

export default app

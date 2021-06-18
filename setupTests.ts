import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: './.env.test' })

afterAll(async () => {
  await mongoose.connection.close()
})

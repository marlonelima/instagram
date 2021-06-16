import mongoose from 'mongoose'

afterAll(async () => {
  return await mongoose.connection.close()
})

import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const mongod = new MongoMemoryServer()

const db = {
  async connect() {
    const uri = await mongod.getUri()

    await mongoose.connect(uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      poolSize: 10
    })
  },

  async closeDatabase() {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongod.stop()
  },

  async clearDatabase() {
    const collections = mongoose.connection.collections

    for (const key in collections) {
      const collection = collections[key]
      await collection.deleteMany({})
    }
  }
}

export default db

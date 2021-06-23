import mongoose from 'mongoose'

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.DATABASE_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  mongoose.Promise = global.Promise
}

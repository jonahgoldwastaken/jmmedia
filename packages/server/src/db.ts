import mongoose from 'mongoose'
const { MONGO_URL, MONGO_DATABASE } = process.env

export const connectToDB = async () => {
  if (MONGO_URL && MONGO_DATABASE) {
    try {
      await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        dbName: MONGO_DATABASE,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  } else {
    return false
  }
}

export default connectToDB

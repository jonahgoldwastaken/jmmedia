import mongoose from 'mongoose'
const { MONGO_URL, MONGO_DATABASE } = process.env

const connectToDB = async () => {
  if (MONGO_URL && MONGO_DATABASE) {
    try {
      await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        dbName: MONGO_DATABASE,
      })
      return true
    } catch (err) {
      return false
    }
  } else {
    return false
  }
}

export default connectToDB

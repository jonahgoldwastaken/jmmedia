import mongoose from 'mongoose'
const { MONGO_URL, MONGO_DATABASE } = process.env

let connection: typeof mongoose

const connectToDB = async () => {
  if (MONGO_URL && MONGO_DATABASE) {
    try {
      connection = await mongoose.connect(MONGO_URL, {
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

export const closeDBConnection = async () => {
  await connection.disconnect()
}

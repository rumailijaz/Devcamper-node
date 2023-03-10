// /**
//  * Database connection
//  * @author Rumail Ijaz

  const mongoose =require('mongoose')

  const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.MONGO_URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        })

      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
      console.error(`Error: ${error.message}`.red.underline.bold)
      process.exit(1)
    }
  }

  module.exports=connectDB
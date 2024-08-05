const  mongoose = require('mongoose')
const app = require('./app')
require('dotenv').config()
const PORT = process.env.PORT || 3030
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS


mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.kukw7ho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
  app.listen(PORT, () => console.log(`Your are connected with the Mongo DB, and loccaly running at PORT: ${PORT}`) )
}).catch((error) => console.log(error))

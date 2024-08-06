const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()
const corsOptions = {
  origin: 'http://localhost:5173', // Substitua com a URL do seu frontend
  credentials: true, // Permite enviar cookies
};
app.use(cors(corsOptions))
app.use(express.json())
app.use(router)
module.exports = app;

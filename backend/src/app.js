const express = require('express')
const cookieParser = require('cookie-parser');
const cors = require('cors')
const router = require('./router')
const app = express()
app.use(cookieParser());
const corsOptions = {
  origin: 'http://localhost:5173', 
  credentials: true,
};
app.use(cors(corsOptions))
app.use(express.json())
app.use(router)
module.exports = app;

const express = require('express')
const app = express()
const connection = require('./config/db')

//  Connect DB
connection.connect();
console.log("db connected")

const userRoutes = require('./routes/userRoutes')



app.use('/', userRoutes)


module.exports = app

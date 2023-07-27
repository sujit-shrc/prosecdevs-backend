const express = require('express')
const app = express()
// const bodyParser = require('body-parser');
const connection = require('./config/db')

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // For parsing form

// We can use express.urlencoded or bodyParser for getting params data
// app.use(bodyParser.json());


//  Connect DB
connection.connect();
console.log("db connected")

const userRoutes = require('./routes/userRoutes')



app.use('/', userRoutes)


module.exports = app

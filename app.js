const express = require('express')
const app = express()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host : '127.0.0.1',
  user : 'root',
  password  :'toor',
  database : 'student'
});

app.get('/getData', (req, res) => {
    connection.connect();
    console.log("db connected")
    connection.query("select * from studentData", function(error, results){
    console.log("response is ", results);
    res.json(results);
  })
  connection.end();
})


const userRoutes = require('./routes/userRoutes')
app.use('/', userRoutes)

// app.get('/', (req, res) => {
//   res.json({
//     status: "OK",
//     message: "Welcome!!!"
//   })
// })

// app.get('/live', (req, res) => {
//   res.json({
//     status: "OK",
//     message: "We Are Live..."
//   })
// })

module.exports = app

const express = require('express')
const { getStudentData } = require('../controller/userController')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    status: "OK",
    message: "Welcome!!!"
  })
})

router.get('/live', (req, res) => {
  res.json({
    status: "OK",
    message: "We Are Live..."
  })
})

router.get('/getData', getStudentData)

module.exports = router

const express = require('express')
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

module.exports = router

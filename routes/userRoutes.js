const express = require('express')
const { getStudents, getCourses, addStudents, deleteStudent }  = require('../controller/userController')
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

router.get('/students', getStudents)
router.get('/courses', getCourses)
router.post('/addStudents', addStudents)
router.delete('/student/:id', deleteStudent)

module.exports = router

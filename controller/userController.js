const connection = require('../config/db');

const getStudents = async (req, res) => {
    await connection.query("select * from students", function(error, students){
    console.log("response is ", students);
    res.json(students);
  })
  connection.end();
}

const getCourses = async (req, res) => {
  await connection.query("select * from Courses", function (error, courses) {
    res.json(courses)
  })
}

const addStudents = async (req, res) => {
  const {  name, course } = req.body;
  if(!name || !course){
    // throw new Error("Data is Required");
    res.json({"warning":"Data is Required"})
  }
  const query = 'INSERT INTO students (name, course) VALUES (?, ?)';
    const values = [name, course]
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Error inserting data into the database:', err.message);
        return res.status(500).json({ error: 'Error inserting data into the database' });
      }
  
      console.log('Data inserted into the database:', result);
  
      // Send a response
      res.status(200).json({ message: 'Data inserted successfully!', data: req.body });
    });
}

const deleteStudent = async (req, res) => {
  const stuId = req.params.id;
  console.log(stuId)
  const query = 'DELETE FROM students WHERE id = ?';

  connection.query(query, stuId, (err, result) => {
    if (err) {
      console.error('Error deleting data from the database:', err.message);
      return res.status(500).json({ error: 'Error deleting data from the database' });
    }

    console.log('Data deleted from the database:', result);

    // Send a response
    res.status(200).json({ message: 'Data deleted successfully!' });
  });
}

module.exports = {
  getStudents,
  getCourses,
  addStudents,
  deleteStudent,
};
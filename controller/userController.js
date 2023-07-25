const connection = require('../config/db');

exports.getStudentData = async  (req, res) => {
    await connection.query("select * from studentData", function(error, results){
    console.log("response is ", results);
    res.json(results);
  })
  connection.end();
}
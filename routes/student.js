var express = require('express');
var router = express.Router();

/* GET course listing. */

const { createStudent, getStudent, getStudentById, updateStudent, removeStudent } = require('../Controller/index');
router.post('/createStudent',createStudent)
router.get('/getStudent',getStudent)
router.get('/getStudentById',getStudentById)
router.put('/updateStudent',updateStudent)
router.delete('/removeStudent',removeStudent)
module.exports = router;

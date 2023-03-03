var express = require('express');
var router = express.Router();

/* GET course listing. */

const { createCourse, getCourse, getCourseById, updateCourse, removeCourse } = require('../Controller/index');
router.post('/createCourse',createCourse)
router.get('/getCourse',getCourse)
router.get('/getCourseById',getCourseById)
router.put('/updateCourse',updateCourse)
router.delete('/removeCourse',removeCourse)
module.exports = router;

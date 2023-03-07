const teacherStudentHasCourseService = require('../../services/teacherStudentHasCourse')
const joi = require('joi');
module.exports= async function(req,res){
    const data= await teacherStudentHasCourseService.createTeacherStudentHasCourse(req.body);
    res.send(data);
}
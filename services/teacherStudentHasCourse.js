const bcrypt=require('bcrypt');
 const teacherStudentHasCourseModel= require('../models/teacherStudentHasCourseModel');

module.exports= {
createTeacherStudentHasCourse: async function(body){
    const data = await teacherStudentHasCourseModel.createTeacherStudentHasCourse(body);
    return data;
},

}
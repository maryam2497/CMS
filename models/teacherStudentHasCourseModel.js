const {models} = require("../models/definitions")

module.exports = {
   
    createTeacherStudentHasCourse: async function(body){

        const result = await models.teacherStudentHasCourse.create(body);
        return result;
    },
  
  

}
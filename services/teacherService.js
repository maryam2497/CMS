const bcrypt=require('bcrypt');
 const teacherModel= require('../models/teacherModel');

module.exports= {
createTeacher: async function(body){
    const data = await teacherModel.createTeacher(body);
    return data;
},
getTeacher: async function(){

    const result = await teacherModel.getTeacher();
    return result;
},
getTeacherById: async function(ids){
    const result = await teacherModel.getTeacherById(ids);
    return result;
},
updateTeacher: async function(body){

    const result = await teacherModel.updateTeacher(body);
    return result;
},
removeTeacher: async function(ids){

    const result = await teacherModel.removeTeacher(ids);
    return result;
},


}
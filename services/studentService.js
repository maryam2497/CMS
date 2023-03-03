const bcrypt=require('bcrypt');
 const studentModel= require('../models/studentModel');

module.exports= {
createStudent: async function(body){
    const data = await studentModel.createStudent(body);
    return data;
},
getStudent: async function(){

    const result = await studentModel.getStudent();
    return result;
},
getStudentById: async function(ids){
    const result = await studentModel.getStudentById(ids);
    return result;
},
updateStudent: async function(body){

    const result = await studentModel.updateStudent(body);
    return result;
},
removeStudent: async function(ids){

    const result = await studentModel.removeStudent(ids);
    return result;
},


}
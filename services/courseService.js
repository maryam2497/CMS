const bcrypt=require('bcrypt');
 const courseModel= require('../models/courseModel');

module.exports= {
createCourse: async function(body){
    // body.password=await bcrypt.hashSync(body.password,10);
    const data = await courseModel.createCourse(body);
    return data;
},
getCourse: async function(){

    const result = await courseModel.getCourse();
    return result;
},
getCourseById: async function(ids){
    const result = await courseModel.getCourseById(ids);
    return result;
},
updateCourse: async function(body){

    const result = await courseModel.updateCourse(body);
    return result;
},
removeCourse: async function(ids){

    const result = await courseModel.removeCourse(ids);
    return result;
},


}
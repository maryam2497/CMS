const teacherService = require('../../services/teacherService')
const joi = require('joi');
module.exports= async function(req,res){
    const data= await teacherService.createTeacher(req.body);
    res.send(data);
}
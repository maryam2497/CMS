const courseService = require('../../services/courseService')
const joi = require('joi');
module.exports= async function(req,res){
    const data= await courseService.createCourse(req.body);
    res.send(data);
}
const courseService = require('../../services/courseService')
module.exports= async function(req,res){
    const data= await courseService.updateCourse(req.body);
    res.send(data);
}
const courseService = require('../../services/courseService')
module.exports= async function(req,res){
    const data= await courseService.getCourse();
    res.send(data);
}
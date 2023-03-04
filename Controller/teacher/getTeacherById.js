const teacherService = require('../../services/teacherService')
module.exports= async function(req,res){
    const data= await teacherService.getTeacherById(req.query.ids);
    res.send(data);
}
const studentService = require('../../services/studentService')
module.exports= async function(req,res){
    const data= await studentService.getStudentById(req.query.ids);
    res.send(data);
}
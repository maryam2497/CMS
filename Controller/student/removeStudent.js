const studentService = require('../../services/studentService');

module.exports = async function(req,res)
{
    const data = await studentService.removeStudent(req.query.ids);
    res.send(data);
}
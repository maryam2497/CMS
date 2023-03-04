const teacherService = require('../../services/teacherService');

module.exports = async function(req,res)
{
    const data = await teacherService.removeTeacher(req.query.ids);
    res.send(data);
}
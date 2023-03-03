const userSerivce = require('../../services/userService');

module.exports = async function(req,res)
{
    const data = await userSerivce.removeUser(req.query.ids);
    res.send(data);
}
const userService = require('../../services/userService')
module.exports= async function(req,res){
    const data= await userService.updateUser(req.body);
    res.send(data);
}
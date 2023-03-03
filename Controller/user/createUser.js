const userService = require('../../services/userService')
const joi = require('joi');
module.exports= async function(req,res){
    const data= await userService.createUser(req.body);
    res.send(data);
}
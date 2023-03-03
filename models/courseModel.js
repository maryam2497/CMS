const {models} = require("../models/definitions")

module.exports = {
    createCourse: async function(body){

        const result = await models.Course.create(body);
        return result;
    },
    getCourse: async function(){

        const result = await models.Course.findAll({
          
        });
        return result;
    },
    getCourseById: async function(ids){

        const result = await models.Course.findAll({
            where:{id:ids},
           
        });
        return result;
    },
    updateCourse: async function(body){
        
        const result = await models.Course.update(
        {
        ...body
        },
        {
            where : {id: body.id}
        }
        );
        return result;
    },
    removeCourse: async function(ids){
        
        const result = await models.Course.destroy(
        {
          where: {id:ids}
        },
        );
        if(result){
                return "deleted"
        }
        return "failed";
    },

}
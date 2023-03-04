const {models} = require("../models/definitions")
const {createUser,removeUser, updateUser,getUserById} = require("../models/userModel")

module.exports = {
    createTeacher: async function(body){
        var userData={
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            userName: body.userName,
            phoneNumber: body.phoneNumber,
            password: body.password
        }
        var teacherData={
            dept: body.dept,
            teacherId: body.teacherId,
            officeLocation: body.officeLocation,
        }

        const user= await createUser(userData);
        teacherData={...teacherData, userId: user.id}

        const result= await models.Teacher.create(teacherData);
        return result;
    },
    getTeacher: async function(){

        const result = await models.Teacher.findAll({
        include: {
            model: models.User,
            attributes: { exclude: ['password'] }
        }
        });
        return result;
    },
    getTeacherById: async function(ids){
        const result = await models.Teacher.findAll({
          where: {id: ids},
        });
    
        if (result.length === 0) {
          return "Teacher not found";
        }
    
        const Teacher = result[0];
        const userResult = await getUserById(Teacher.userId);
        if (userResult.length === 0) {
          return "User not found";
        }
        const user = userResult[0];
    
        return {
          Teacher: Teacher,
          user: user
        };
      },
    updateTeacher: async function(body){
        
        const teacher = await models.Teacher.findByPk(body.id);
        if (!teacher) {
            return "Teacher not found";
        }

        const user = await models.User.findByPk(teacher.userId);
        if (!user) {
            return "User not found";
        }

        // Update user
        const updatedUser = await updateUser({...body, id: user.id});

        // Update teacher
        const updatedTeacher = await models.Teacher.update(
            {...body},
            {where: {id: body.id}}
        );

        return {
            teacher: updatedTeacher,
            user: updatedUser
        };
    },

    removeTeacher: async function(id){
        const teacher = await models.Teacher.findByPk(id);
        if (!teacher) {
            return "Teacher not found";
        }

        const result = await models.Teacher.destroy({
            where: {id: id}
        });
        
        if (result) {
            const user = await models.User.findByPk(teacher.userId);
            if (!user) {
                return "User not found";
            }
            const userResult = await removeUser(user.id);
            if (userResult === "deleted") {
                return "Teacher and user deleted";
            }
            return "Teacher deleted, but user not deleted";
        }
        return "Teacher delete failed";
    },

}
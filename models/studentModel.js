const {models} = require("../models/definitions")
const {createUser, removeUser,updateUser,getUserById} = require("../models/userModel")

module.exports = {
    createStudent: async function(body){
        var userData={
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            userName: body.userName,
            phoneNumber: body.phoneNumber,
            password: body.password
        }
        var studentData={
            sem: body.sem,
            regNum: body.regNum,
            dept: body.dept,
        }

        const user= await createUser(userData);
        studentData={...studentData, userId: user.id}

        const result= await models.Student.create(studentData);
        return result;
    },
    getStudent: async function(){

        const result = await models.Student.findAll({
        include: {
            model: models.User,
            attributes: { exclude: ['password'] }
        }
        });
        return result;
    },
   
    
    getStudentById: async function(ids){
        const result = await models.Student.findAll({
          where: {id: ids},
        });
    
        if (result.length === 0) {
          return "Student not found";
        }
    
        const student = result[0];
        const userResult = await getUserById(student.userId);
        if (userResult.length === 0) {
          return "User not found";
        }
        const user = userResult[0];
    
        return {
          student: student,
          user: user
        };
      },
  
    updateStudent: async function(body){
        
        const student = await models.Student.findByPk(body.id);
        if (!student) {
            return "Student not found";
        }

        const user = await models.User.findByPk(student.userId);
        if (!user) {
            return "User not found";
        }

        // Update user
        const updatedUser = await updateUser({...body, id: user.id});

        // Update student
        const updatedStudent = await models.Student.update(
            {...body},
            {where: {id: body.id}}
        );

        return {
            student: updatedStudent,
            user: updatedUser
        };
    },
    
    removeStudent: async function(id){
        const student = await models.Student.findByPk(id);
        if (!student) {
            return "Student not found";
        }

        const result = await models.Student.destroy({
            where: {id: id}
        });
        
        if (result) {
            const user = await models.User.findByPk(student.userId);
            if (!user) {
                return "User not found";
            }
            const userResult = await removeUser(user.id);
            if (userResult === "deleted") {
                return "Student and user deleted";
            }
            return "Student deleted, but user not deleted";
        }
        return "Student delete failed";
    },
    

}
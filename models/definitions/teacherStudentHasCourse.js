const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class teacherStudentHasCourse extends Model {};
teacherStudentHasCourse.init(
    {
        id:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },

    },
    {
        timestamps:true,
        paranoid:true,
        sequelize: sequelize,
        modelName:"teacherStudentHasCourse"
    }
)
module.exports = teacherStudentHasCourse;
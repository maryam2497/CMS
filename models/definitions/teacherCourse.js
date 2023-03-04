const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class teacherCourse extends Model {};
teacherCourse.init(
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
        modelName:"teacherCourse"
    }
)
module.exports = teacherCourse;
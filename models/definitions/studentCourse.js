const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class StudentCourse extends Model {};
StudentCourse.init(
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
        modelName:"StudentCourse"
    }
)
module.exports = StudentCourse;
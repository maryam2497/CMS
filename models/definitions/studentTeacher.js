const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class StudentTeacher extends Model {};
StudentTeacher.init(
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
        modelName:"StudentTeacher"
    }
)
module.exports = StudentTeacher;
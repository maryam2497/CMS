const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class Teacher extends Model {};
Teacher.init(
    {
        id:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },

        dept:{
           
            allowNull:false,
            type:DataTypes.STRING(),
        },

        teacherId:{
            unique:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },

        officeLocation:{
            allowNull:false,
            type:DataTypes.STRING(),
        },
       
       
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize: sequelize,
        modelName:"Teacher"
    }
)
module.exports = Teacher;
const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class Student extends Model {};
Student.init(
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

        regNum:{
            unique:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },

        sem:{
            allowNull:false,
            type:DataTypes.INTEGER,
        },
       
       
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize: sequelize,
        modelName:"Student"
    }
)
module.exports = Student;
const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class Course extends Model {};
Course.init(
    {
        id:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },

        title:{
            unique:true,
            allowNull:false,
            type:DataTypes.STRING(),
        },

        creditHr:{
            allowNull:false,
            type:DataTypes.INTEGER,
        },

        courseCode:{
            unique:true,
            allowNull:false,
            type:DataTypes.STRING(),
        },
        courseLab:{
            allowNull:false,
            type:DataTypes.BOOLEAN,
        }
       
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize: sequelize,
        modelName:"Course"
    }
)
module.exports = Course;
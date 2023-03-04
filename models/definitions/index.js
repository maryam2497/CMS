const Sequelize = require('sequelize');
var config = require('../../config.json');
const db = {};
config = config.db;
let sequelize = require('../../common/dbConnection');
const  User  = require('./user');
const  Course  = require('./course');
const  Teacher  = require('./teacher');
const  Student  = require('./student');
const  TeacherCourse  = require('./teacherCourse');
const  StudentTeacher  = require('./studentTeacher');
const  StudentCourse  = require('./studentCourse');
const models = {
    User,Course,Teacher,Student,TeacherCourse,StudentTeacher,StudentCourse
};

User.hasOne(Student,{onDelete: 'CASCADE', foreignKey: 'userId'})
Student.belongsTo(User,{onDelete: 'CASCADE', foreignKey: 'userId'});

User.hasOne(Teacher,{onDelete: 'CASCADE', foreignKey: 'userId'})
Teacher.belongsTo(User,{onDelete: 'CASCADE', foreignKey: 'userId'});

sequelize.models=models;
db.sequelize=sequelize;
db.Sequelize=Sequelize;
module.exports={db,models};
const Sequelize = require('sequelize');
var config = require('../../config.json');
const db = {};
config = config.db;
let sequelize = require('../../common/dbConnection');
const  User  = require('./user');
const  Course  = require('./course');
const  Teacher  = require('./teacher');
const  Student  = require('./student');
const  teacherStudentHasCourse  = require('./teacherStudentHasCourse');
const models = {
    User,Course,Teacher,Student,teacherStudentHasCourse
};

User.hasOne(Student,{onDelete: 'CASCADE', foreignKey: 'userId'})
Student.belongsTo(User,{onDelete: 'CASCADE', foreignKey: 'userId'});

User.hasOne(Teacher,{onDelete: 'CASCADE', foreignKey: 'userId'})
Teacher.belongsTo(User,{onDelete: 'CASCADE', foreignKey: 'userId'});

//Junction table
Teacher.hasMany(teacherStudentHasCourse,{onDelete:'CASCADE',foreignKey:'teacherId'})
teacherStudentHasCourse.belongsTo(Teacher,{onDelete:'CASCADE',foreignKey:'teacherId'});

Course.hasMany(teacherStudentHasCourse,{onDelete:'CASCADE',foreignKey:'courseId'})
teacherStudentHasCourse.belongsTo(Course,{onDelete:'CASCADE',foreignKey:'courseId'});


Student.hasMany(teacherStudentHasCourse,{onDelete:'CASCADE',foreignKey:'studentId'})
teacherStudentHasCourse.belongsTo(Student,{onDelete:'CASCADE',foreignKey:'studentId'});



sequelize.models=models;
db.sequelize=sequelize;
db.Sequelize=Sequelize;
module.exports={db,models};
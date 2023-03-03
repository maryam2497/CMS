const Sequelize = require('sequelize');
var config = require('../../config.json');
const db = {};
config = config.db;
let sequelize = require('../../common/dbConnection');
const  User  = require('./user');
const  Course  = require('./course');
const  Teacher  = require('./teacher');
const  Student  = require('./student');

const models = {
    User,Course,Teacher,Student
};



sequelize.models=models;
db.sequelize=sequelize;
db.Sequelize=Sequelize;
module.exports={db,models};
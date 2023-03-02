const Sequelize = require('sequelize');
var config = require('../../config.json');
const db = {};
config = config.db;
let sequelize = require('../../common/dbConnection');

// const  Orders  = require('./orders');
// const Cart  = require('./cart');
// const  Product  = require('./product');
// const  Roles  = require('./roles');
// const CartItems = require('./cartItems');
const models = {
    
};



sequelize.models=models;
db.sequelize=sequelize;
db.Sequelize=Sequelize;
module.exports={db,models};
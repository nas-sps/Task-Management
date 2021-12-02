const db = require("../config/db.config");
const { Sequelize }= require("sequelize");


// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const usertask = db.define('task', {
  // Define attributes
  id:{
    primaryKey : true,
    autoIncrement : true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING(255)
  },
  description: {
    type: DataTypes.STRING(255)
  },
  status:{
    type: DataTypes.STRING(255)
  },
  userId:{
    type: DataTypes.INTEGER
  }
},{
  tableName:'task',
  freezeTableName: true,
});
 
module.exports =  usertask ;
const db = require("../config/db.config");
const { Sequelize }= require("sequelize");


// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Registration = db.define('registrations', {
  // Define attributes
  id:{
    primaryKey : true,
    autoIncrement : true,
    type: DataTypes.INTEGER
  },
  firstname: {
    type: DataTypes.STRING(255)
  },
  lastname: {
    type: DataTypes.STRING(255)
  },
  gender:{
    type: DataTypes.STRING(255)
  },
  email:{
    type: DataTypes.STRING(255),
    unique: true
  },
  number:{
  type: DataTypes.STRING(255),
  },
  password:{
    type: DataTypes.STRING(255),
  }, 
},{
  tableName:'registrations',
  freezeTableName: true,
});
 
module.exports =  Registration ;
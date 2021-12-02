// import sequelize
const { Sequelize }  = require("sequelize");
require('dotenv').config();

// create connection
const db = new Sequelize(process.env.MYSQL_DB,process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

db.authenticate()
.then(()=>{
    console.log("DB Connected");
})
.catch(err => {
    console.log("Error" + err);
})
// export connection
module.exports = db;
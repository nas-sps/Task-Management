const express=require("express")
const app=express()
const sequelize = require("./config/db.config");
const bodyParser = require('body-parser');
const auth = require("./routes/auth");
const task = require("./routes/usertask");
const cors = require("cors");
require('dotenv').config()
const port=process.env.PORT || 9000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 app.use("/auth",auth);
 app.use("/task",task);


 sequelize.sync()
 .then(() => {
    app.listen(port,()=>console.log(`listening at port ${port}`));
 })

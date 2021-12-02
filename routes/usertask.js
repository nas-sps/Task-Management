const express = require("express");
const { checkToken } = require("../middleware/auth-jwt");
const { 
    AddTask,
    GetTask,
    UpdateTask,
    DeleteTask
    } = require("../controllers/usertask");
const router = express.Router();

 router.post("/addtask",checkToken,AddTask);
 router.get("/alltask",checkToken,GetTask);
 router.put("/taskupdate/:id",checkToken,UpdateTask);
 router.delete("/taskdelete/:id",checkToken,DeleteTask);

module.exports = router;
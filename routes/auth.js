const express = require("express");
const { checkToken } = require("../middleware/auth-jwt");
const { 
    create,
    getUser,
    getUserById,
    UpdateUser,
    DeleteUser,
    login
    } = require("../controllers/auth");
const router = express.Router();

 router.post("/login",login);
 router.post("/Registeruser",create);
 router.get("/alluser",checkToken,getUser);
 router.get("/user/:id",checkToken,getUserById);
 router.put("/userupdate/:id",checkToken,UpdateUser);
 router.delete("/userdelete/:id",checkToken,DeleteUser );



module.exports = router;
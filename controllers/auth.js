require('dotenv').config();
const User = require("../models/auth");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken");


exports.create = async (req, res) => {
    const body = req.body;
    try {
        const salt =   await bcrypt.genSaltSync(10);
      body.password =  await bcrypt.hashSync(body.password,salt);
       const data = await User.create(body);
        res.json({ 
            success:1,
            Data:data,
            message:"User Created"
         });
    } catch (err) {
        console.log(err);
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ where : {email : req.body.email }});
        if(user){
           const password_valid = await bcrypt.compare(req.body.password,user.password);
           if(password_valid){
              const token = jwt.sign({ Data:user },process.env.TOKEN);
               res.status(200).json({ Data:user , token : token });
           } else {
             res.status(400).json({ error : "Password Incorrect" });
           }
         
         }else{
           res.status(404).json({ error : "User does not exist" });
         }
    } catch (err) {
        console.log(err);
    }
}

exports.getUser = async (req, res) => {
    try {
        const details = await User.findAll();
        res.json({ 
            Data:details,
            message:"All User"
         });
    } catch (err) {
        console.log(err);
    }
}

exports.getUserById = async (req, res) => {
    try {
        const UserDetails = await User.findAll({
            where: {
                id: req.params.id
            }
        });
       res.json({ 
            Data:UserDetails[0]
         });
    } catch (err) {
        console.log(err);
    }
}

exports.UpdateUser = async (req, res) => {
    try {
       const UserUpdate = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            Data:UserUpdate,
            message: "User Updated Successfully"
        });
    } catch (err) {
        console.log(err);
    }
}


exports.DeleteUser = async (req, res) => {
    try {
        const UserDelete = await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            Data:UserDelete,
            message: "User Deleted Successfully"
        });
    } catch (err) {
        console.log(err);
    }
}
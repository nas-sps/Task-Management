require('dotenv').config();
const Task = require("../models/usertask");

exports.AddTask = async (req, res) => {
    const body = req.body;
    body["userId"] = req.userId.Data.id;
    try {
       const data = await Task.create(body);
        res.json({ 
            success:1,
            Data:data,
            message:"Task Created"
         });
    } catch (err) {
        console.log(err);
    }
}

exports.GetTask = async (req, res) => {
    try {
        const details = await Task.findAll({where: {
            userId:req.userId.Data.id
        }
    });
        res.json({ 
            Data:details,
            message:"All User Task"
         });
    } catch (err) {
        console.log(err);
    }
}


exports.UpdateTask = async (req, res) => {
    try {
       const UserUpdate = await Task.update(req.body, {
            where: {
                userId:req.userId.Data.id,
                id: req.params.id
            }
        });
        res.json({
            Data:UserUpdate,
            message: "Task Updated Successfully"
        });
    } catch (err) {
        console.log(err);
    }
}

exports.DeleteTask = async (req, res) => {
    try {
        const UserDelete = await Task.destroy({
            where: {
                userId:req.userId.Data.id,
                id: req.params.id
            }
        });
        if(UserDelete){
        res.json({
            Data:UserDelete,
            message: "Task Deleted Successfully"
        });
        }else{
        res.json({
            Data:UserDelete,
            message: "Task doesn't exist"
        });
    }
    } catch (err) {
        console.log(err);
    }
}
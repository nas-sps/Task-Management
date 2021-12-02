require('dotenv').config();
const { verify } = require("jsonwebtoken");


module.exports = {
    checkToken : (req,res,next) => {
        let token = req.get("authorization");
        if(token){
            verify(token , process.env.TOKEN , (err, decoded) => {
                if(err){
                    res.json({
                        success :0,
                        message :"Invalid Token"
                    });
                }else{
                    req.userId = decoded;
                    next();
                }
            })
        }else{
            res.json({
                success: 0,
                message:"Access Denied..!Unauthorized User"
            });
        }
    }
}
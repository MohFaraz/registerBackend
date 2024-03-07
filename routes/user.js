const express=require("express");
const signUpHandler=require("../controllers/signUpHandler")
const router=express.Router();



router.route("/register")  //localhost:6500/api/users/register   
.post(signUpHandler)

module.exports=router;
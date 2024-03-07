const express=require("express");
const router=express.Router();
const userModel=require("../model/usersModel")

router.route("/").get((req,res)=>{

    userModel.find()
    .then((docs)=>{
        if(!docs){
            res.status(400).send({mesage:"somenthing went wrong"});
        }
        else{
            res.send(docs);
        }
    }).catch((error)=>{
        res.status(500).send({message:"server not available"})
    })
})
module.exports=router;
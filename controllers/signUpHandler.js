const User=require("../model/usersModel")


const signUpHandler=async (req,res)=>{
    try{
      const newUser=  new User({
        Name:req.body.Name,
        Last_Name:req.body.Last_Name,
        email:req.body.email,
        MobNo:req.body.MobNo,
        Project:req.body.Project
      })
      const savedUser=await newUser.save();
      res.status(201).json(savedUser);

    }
    catch(err){
     res.status(500).json({message:"error creating user in the database"})
    }
}
module.exports=signUpHandler;
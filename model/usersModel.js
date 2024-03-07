const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    Name:{
        type:String,required:true
    },
    Last_Name:{
        type:String,require:true
    },
    email:{
        type:String,required:true
    },
    MobNo:{
        type:Number,required:true
    },
    Project:{
        type:String,required:true
    }
},{
    timestamps:true,
})
const userModel=mongoose.model("userDetails",userSchema);
module.exports=userModel;

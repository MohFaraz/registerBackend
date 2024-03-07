const connectDatabase=()=>{


const mongoose=require("mongoose");

const url="mongodb+srv://mohdfaraz9808:Faraz%4012345@cluster0.hs1qtb6.mongodb.net/crud?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
const con=mongoose.connection;

con.on('open',()=>{
    console.log("MongoDB is connected");
})
}

module.exports=connectDatabase;

const db=require("./db")
const express=require("express");
const app=express();
const cors=require("cors");
const postUserDetail=require("./routes/user")
const getUserDetails=require("./routes/getUserDetails")
// const userModel=require("./model/usersModel")

app.use(cors());

const port=6500;



//database connection---------------------->
db();
//database connection---------------------->
app.use(express.json());
//making routes ------------------------------->
app.use("/api/users",postUserDetail);
app.use("/getUsers",getUserDetails)



//starting the server at port ------------------>
app.listen(port,()=>{
    console.log("server is started on" + port);
})


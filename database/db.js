import mongoose  from "mongoose";

const obj={}
mongoose.connect("mongodb://127.0.0.1:27017/FoodMaker").then((res)=>{
    console.log("db connected");
    obj.db=res;
}).catch((err)=>{
    console.log(err);
})

export default obj;
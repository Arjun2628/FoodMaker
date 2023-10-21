import mongoose  from "mongoose";

const obj={}
mongoose.connect("mongodb+srv://arjun2628official:arjun123@cluster0.bkqwwbi.mongodb.net/").then((res)=>{
    console.log("db connected");
    obj.db=res;
}).catch((err)=>{
    console.log(err);
})

export default obj;
   
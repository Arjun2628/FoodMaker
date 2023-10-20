import express from "express"
import index from  "./routes/index.js"
import db from "./database/db.js"

const app=express()

app.listen(4001,()=>{
    console.log("server started");
})

app.use("/",index)
db
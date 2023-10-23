import express from "express"
import foodController from "../controller/foodController.js"
import bodyParser  from "body-parser"

const router=express.Router()

router.use(bodyParser.json())

router.get("/",foodController.getAllFoodItems)
router.get("/check",(req,res)=>{res.json({message:"its working welllll........."})})
router.post("/addfood",foodController.addReceipe)
router.put("/updatefood",foodController.update)
router.delete("/deletefood/:id",foodController.deleteFood) //sdfsdf

export default router    
import express from "express"
import foodController from "../controller/foodController.js"
import bodyParser  from "body-parser"

const router=express.Router()

router.use(bodyParser.json())

router.get("/",foodController.getAllFoodItems)
router.get("/check",res.json({message:"done its working"}))
router.post("/addfood",foodController.addReceipe) //sdfsdf

export default router    
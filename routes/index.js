import express from "express"
import foodController from "../controller/foodController.js"
import bodyParser  from "body-parser"

const router=express.Router()

router.use(bodyParser.json())

router.get("/",foodController.getAllFoodItems)
router.post("/addfood",foodController.addReceipe)

export default router
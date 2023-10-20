import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo:{
    type:String,
    required:true
  },
  foodIncrediance: {
    type: [String],
    required: true,
  },
  steps: {
    type: [String],
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  timeRequired: {
    type: String,
    required: true,
  },
  calories: {
    type: String,
    required: true,
  },
});

const FoodDetails=mongoose.model('FoodDetails',FoodSchema)
export default FoodDetails
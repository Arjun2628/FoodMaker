import express from "express";
import FoodDetails from "../model/foodModel.js";

const getAllFoodItems = async (req, res) => {
  const allData = await FoodDetails.find({});
  res.json(allData);
};

const addReceipe = async (req, res) => {
  try {
    const {
      foodName,
      description,
      photo,
      foodIncrediance,
      steps,
      level,
      timeRequired,
      calories,
    } = req.body;

    if (
      foodName &&
      description &&
      photo &&
      foodIncrediance &&
      steps &&
      level &&
      timeRequired &&
      calories
    ) {
      const result = await FoodDetails.create({
        foodName,
        description,
        photo,
        foodIncrediance,
        steps,
        level,
        timeRequired,
        calories,
      });
      const allData = await FoodDetails.find({});
      res.status(200).json(allData);
    } else {
      console.log("error");
    }
  } catch (err) {
    console.log(err);
  }
};

const update = async (req, res) => {
  try {
    const { id, ...rest } = req.body;
    const result = await FoodDetails.findByIdAndUpdate(
      { _id: id },
      { $set: rest }
    );

    const allData = await FoodDetails.find({});
    res.json(allData);
  } catch (err) {
    console.log(err);
  }
};

const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    await FoodDetails.findByIdAndDelete({ _id: id });
    const alldata = await FoodDetails.find({});
    res.json(alldata);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getAllFoodItems,
  addReceipe,
  update,
  deleteFood
};

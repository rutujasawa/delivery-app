const fooddataSchema = require('../models/foodmodel')

const getFoodDeliverys = async (req, res) => {
  // res.status(200).json({ message: 'get all contacts' });
  const foods = await fooddataSchema.find()
  res.json(foods)
};

const createFoodDelivery = async (req, res) => {
  // console.log(req.body);
  const { foodName, quantity, price } = req.body;
  // if (!dishtype || !quantity) {
  //   res.status(400);
  //   throw new Error('all fields are mandatory');
  // }
  // res.status(201).json({ message: 'create contacts' });

  const food = await fooddataSchema.create({foodName, quantity, price})
  res.json(food);
};

const updateFoodDelivery = async (req, res) => {
  // res.status(200).json({ message: `update all contacts ${req.params.id}` });

  // const foodwithId = await fooddataSchema.findById(req.params.id);
  const updatedfood = await fooddataSchema.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(updatedfood);
};

const deleteFoodDelivery = async (req, res) => {
  // res.status(200).json({ message: `delete all contacts ${req.params.id}` });
  const deletefood = await fooddataSchema.deleteOne({_id:req.params.id})
  res.json(deletefood);
};

const getFoodDelivery = async (req, res) => {
  // res.status(200).json({ message: `get all contacts ${req.params.id}` });
  const foodwithId = await fooddataSchema.findById({_id:req.params.id})
  res.json(foodwithId);
};
module.exports = {
  getFoodDeliverys,
  createFoodDelivery,
  getFoodDelivery,
  updateFoodDelivery,
  deleteFoodDelivery,
};

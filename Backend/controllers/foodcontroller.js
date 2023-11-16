const getFoodDeliverys = (req, res) => {
  res.status(200).json({ message: 'get all contacts' });
};

const createFoodDelivery = (req, res) => {
  console.log(req.body);
  const { dishtype, quantity } = req.body;
  if (!dishtype || !quantity) {
    res.status(400);
    throw new Error('all fields are mandatory');
  }
  res.status(201).json({ message: 'create contacts' });
};

const updateFoodDelivery = (req, res) => {
  res.status(200).json({ message: `update all contacts ${req.params.id}` });
};

const deleteFoodDelivery = (req, res) => {
  res.status(200).json({ message: `delete all contacts ${req.params.id}` });
};

const getFoodDelivery = (req, res) => {
  res.status(200).json({ message: `get all contacts ${req.params.id}` });
};
module.exports = {
  getFoodDeliverys,
  createFoodDelivery,
  getFoodDelivery,
  updateFoodDelivery,
  deleteFoodDelivery,
};

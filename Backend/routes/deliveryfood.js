const express = require('express');
const router = express.Router();
const {
  getFoodDeliverys,
  createFoodDelivery,
  updateFoodDelivery,
  deleteFoodDelivery,
  getFoodDelivery,
} = require('../controllers/foodcontroller');

router.route('/').get(getFoodDeliverys);

router.route('/').post(createFoodDelivery);

router.route('/:id').get(getFoodDelivery);

router.route('/:id').put(updateFoodDelivery);

router.route('/:id').delete(deleteFoodDelivery);
module.exports = router;

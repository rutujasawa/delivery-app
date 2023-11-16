const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const app = express();
const port = 5000;

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/foodZone");


app.use(express.json());
app.use('/deliveryfood', require('./routes/deliveryfood'));
app.use(errorHandler);
app.listen(5000, () => {
  console.log(`server is running on port ${port}`);
});

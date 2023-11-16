const mongoose = require('mongoose');

const fooddataSchema = mongoose.Schema({
    foodName: {
        type: String,
        require:[true]
    },
    quantity: {
        type: String,
        require:[true]
    },
    price: {
        type: String,
        require:[true]
    }
},
{
    timestamps: true,
}
);
module.exports = mongoose.model("food", fooddataSchema)
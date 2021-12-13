const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cart = new Schema({
    userId: {type: Schema.Types.ObjectId},
    productId: {type: Schema.Types.ObjectId},
    productName:{type:String},
    image:{type:String},
    quantity: { type:Number},
    price: {type: Number}
});

module.exports = mongoose.model('cart', Cart);   
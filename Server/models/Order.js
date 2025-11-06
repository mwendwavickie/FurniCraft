const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        quantity: {type: Number, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: false,

        },
    },
    {id: false}
);

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
        },
        orderItems: [orderItemSchema],
        shippingAddress: {
            adress: String,
            city: String,
            postalCode: String,
            country: String,
        },
        paymentMethod: {type: String},
        totalPrice: {type: Number, required: true, default: 0.00},
        isPaid: {type: Boolean, required: true },
        paidAt: {type: Date},
        isDelivered: {type: Boolean, required: true, default: false},
        deliveredAt: {type: Date},

    },
    {timestamps: true}
);
const Order = mongoose.model('Order',orderSchema);

module.exports = Order;


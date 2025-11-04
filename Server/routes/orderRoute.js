const express = require('express');
const router = express.Router();
const {addOrder, getMyOrders, getOrderById } = require('../controllers/orderController');

// POST /api/orders - Create new order
router.post('/', addOrder);

//GET api/orders/myorders - get the user's orders
router.get('/myorders', getMyOrders);

//GET api/orders/:id - get order by ID
router.get('/:id', getOrderById);

module.exports = router;




"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = exports.createOrder = void 0;
const order_model_1 = require("../models/order.model");
const orderItem_model_1 = require("../models/orderItem.model");
const product_model_1 = require("../models/product.model");
const database_1 = require("../config/database");
const createOrder = async (req, res) => {
    const { customerId, items } = req.body; // items: [{ productId, qty }]
    try {
        const result = await database_1.sequelize.transaction(async (t) => {
            const order = await order_model_1.Order.create({ customerId, status: 'placed' }, { transaction: t });
            let total = 0;
            for (const it of items) {
                const prod = await product_model_1.Product.findByPk(it.productId, { transaction: t });
                if (!prod)
                    throw new Error('Product not found');
                await orderItem_model_1.OrderItem.create({ orderId: order.id, productId: prod.id, sellerId: prod.sellerId, qty: it.qty, price: prod.price }, { transaction: t });
                total += prod.price * it.qty;
            }
            await order.update({ totalAmount: total }, { transaction: t });
            return order;
        });
        res.status(201).json(result);
    }
    catch (e) {
        res.status(400).json({ error: String(e) });
    }
};
exports.createOrder = createOrder;
const getOrder = async (req, res) => {
    const { id } = req.params;
    const order = await order_model_1.Order.findByPk(Number(id));
    if (!order)
        return res.status(404).json({ message: 'Not found' });
    const items = await orderItem_model_1.OrderItem.findAll({ where: { orderId: order.id } });
    res.json({ order, items });
};
exports.getOrder = getOrder;

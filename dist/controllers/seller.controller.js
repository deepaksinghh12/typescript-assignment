"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignDelivery = exports.acceptOrderItems = exports.listOrders = exports.updateProduct = exports.addProduct = void 0;
const product_model_1 = require("../models/product.model");
const order_model_1 = require("../models/order.model");
const orderItem_model_1 = require("../models/orderItem.model");
const database_1 = require("../config/database");
const addProduct = async (req, res) => {
    const sellerId = Number(req.body.sellerId || req.user?.id);
    const { name, sku, description, price, stock, unit } = req.body;
    const p = await product_model_1.Product.create({ sellerId, name, sku, description, price, stock, unit });
    res.status(201).json(p);
};
exports.addProduct = addProduct;
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await product_model_1.Product.findByPk(id);
    if (!product)
        return res.status(404).json({ message: 'Not found' });
    await product.update(req.body);
    res.json(product);
};
exports.updateProduct = updateProduct;
const listOrders = async (req, res) => {
    const sellerId = Number(req.user?.id);
    const items = await order_model_1.Order.findAll({ where: { assignedSellerId: sellerId } });
    res.json(items);
};
exports.listOrders = listOrders;
const acceptOrderItems = async (req, res) => {
    const { orderId } = req.params;
    const { acceptedItemIds } = req.body;
    try {
        await database_1.sequelize.transaction(async (t) => {
            await orderItem_model_1.OrderItem.update({ accepted: false }, { where: { orderId, sellerId: req.user?.id }, transaction: t });
            if (acceptedItemIds && acceptedItemIds.length)
                await orderItem_model_1.OrderItem.update({ accepted: true }, { where: { id: acceptedItemIds }, transaction: t });
            const pending = await orderItem_model_1.OrderItem.count({ where: { orderId, accepted: null }, transaction: t });
            if (pending === 0)
                await order_model_1.Order.update({ status: 'accepted' }, { where: { id: orderId }, transaction: t });
        });
        res.json({ success: true });
    }
    catch (e) {
        res.status(500).json({ error: String(e) });
    }
};
exports.acceptOrderItems = acceptOrderItems;
const assignDelivery = async (req, res) => {
    const { orderId } = req.params;
    const { deliveryPersonId } = req.body;
    await database_1.sequelize.transaction(async (t) => {
        await order_model_1.Order.update({ assignedDeliveryId: deliveryPersonId, status: 'readyForDispatch' }, { where: { id: orderId }, transaction: t });
    });
    res.json({ success: true });
};
exports.assignDelivery = assignDelivery;

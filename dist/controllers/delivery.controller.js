"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatus = exports.viewAssigned = void 0;
const order_model_1 = require("../models/order.model");
const delivery_model_1 = require("../models/delivery.model");
const database_1 = require("../config/database");
const viewAssigned = async (req, res) => {
    const deliveryPersonId = Number(req.user?.id);
    const deliveries = await delivery_model_1.Delivery.findAll({ where: { deliveryPersonId } });
    res.json(deliveries);
};
exports.viewAssigned = viewAssigned;
const updateStatus = async (req, res) => {
    const { orderId } = req.params;
    const { status, proofUrl } = req.body;
    await database_1.sequelize.transaction(async (t) => {
        await order_model_1.Order.update({ status }, { where: { id: orderId }, transaction: t });
        await delivery_model_1.Delivery.create({ orderId: Number(orderId), deliveryPersonId: req.user?.id, status, proofUrl }, { transaction: t });
    });
    res.json({ success: true });
};
exports.updateStatus = updateStatus;

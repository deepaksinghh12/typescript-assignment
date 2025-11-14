"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raiseComplaint = exports.listStores = void 0;
const seller_model_1 = require("../models/seller.model");
const complaint_model_1 = require("../models/complaint.model");
const listStores = async (req, res) => {
    const { city, area, pincode } = req.query;
    const sellers = await seller_model_1.Seller.findAll({ where: { city: city || null } });
    res.json(sellers);
};
exports.listStores = listStores;
const raiseComplaint = async (req, res) => {
    const { orderId, description, imageUrl } = req.body;
    const complaint = await complaint_model_1.Complaint.create({ orderId, customerId: req.user?.id, description, imageUrl });
    res.status(201).json(complaint);
};
exports.raiseComplaint = raiseComplaint;

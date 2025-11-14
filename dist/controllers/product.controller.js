"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateProduct = exports.listSellerProducts = void 0;
const product_model_1 = require("../models/product.model");
const listSellerProducts = async (req, res) => {
    const sellerId = Number(req.params.sellerId || req.user?.id);
    const items = await product_model_1.Product.findAll({ where: { sellerId } });
    res.json(items);
};
exports.listSellerProducts = listSellerProducts;
const deactivateProduct = async (req, res) => {
    const { id } = req.params;
    const p = await product_model_1.Product.findByPk(id);
    if (!p)
        return res.status(404).json({ message: 'Not found' });
    await p.update({ active: false });
    res.json(p);
};
exports.deactivateProduct = deactivateProduct;

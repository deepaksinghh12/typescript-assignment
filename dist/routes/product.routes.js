"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/seller/:sellerId', product_controller_1.listSellerProducts);
exports.productRouter.post('/:id/deactivate', (0, auth_middleware_1.authenticate)(['seller']), product_controller_1.deactivateProduct);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter.post('/', (0, auth_middleware_1.authenticate)(['customer']), order_controller_1.createOrder);
exports.orderRouter.get('/:id', (0, auth_middleware_1.authenticate)(), order_controller_1.getOrder);

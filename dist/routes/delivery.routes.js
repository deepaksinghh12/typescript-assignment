"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryRouter = void 0;
const express_1 = require("express");
const delivery_controller_1 = require("../controllers/delivery.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.deliveryRouter = (0, express_1.Router)();
exports.deliveryRouter.get('/assigned', (0, auth_middleware_1.authenticate)(['delivery']), delivery_controller_1.viewAssigned);
exports.deliveryRouter.post('/orders/:orderId/status', (0, auth_middleware_1.authenticate)(['delivery']), delivery_controller_1.updateStatus);

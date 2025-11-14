"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express_1 = require("express");
const customer_controller_1 = require("../controllers/customer.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.customerRouter = (0, express_1.Router)();
exports.customerRouter.get('/stores', customer_controller_1.listStores);
exports.customerRouter.post('/complaint', (0, auth_middleware_1.authenticate)(['customer']), customer_controller_1.raiseComplaint);

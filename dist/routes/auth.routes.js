"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
exports.authRouter = (0, express_1.Router)();
/** @openapi /api/auth/signup: post */
exports.authRouter.post('/signup', auth_controller_1.signup);
/** @openapi /api/auth/login: post */
exports.authRouter.post('/login', auth_controller_1.login);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authenticate = (roles) => {
    return (req, res, next) => {
        const header = req.headers.authorization;
        if (!header)
            return res.status(401).json({ message: 'No token' });
        const token = header.replace('Bearer ', '');
        try {
            const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'secret');
            if (roles && !roles.includes(payload.role))
                return res.status(403).json({ message: 'Forbidden' });
            req.user = payload;
            next();
        }
        catch (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    };
};
exports.authenticate = authenticate;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashed = await bcrypt_1.default.hash(password, 10);
    const u = await user_model_1.User.create({ name, email, password: hashed, role });
    res.json({ id: u.id, email: u.email });
};
exports.signup = signup;
const login = async (req, res) => {
    const { email, password } = req.body;
    const u = await user_model_1.User.findOne({ where: { email } });
    if (!u)
        return res.status(401).json({ message: 'Invalid' });
    const ok = await bcrypt_1.default.compare(password, u.password);
    if (!ok)
        return res.status(401).json({ message: 'Invalid' });
    const token = jsonwebtoken_1.default.sign({ id: u.id, role: u.role, name: u.name }, process.env.JWT_SECRET || 'secret', { expiresIn: '8h' });
    res.json({ token });
};
exports.login = login;

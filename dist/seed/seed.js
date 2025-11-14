"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const user_model_1 = require("../models/user.model");
const seller_model_1 = require("../models/seller.model");
const product_model_1 = require("../models/product.model");
const salesman_model_1 = require("../models/salesman.model");
const beat_model_1 = require("../models/beat.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function seed() {
    await database_1.sequelize.sync({ force: true });
    const p = await bcrypt_1.default.hash('Password123', 10);
    const sellerUser1 = await user_model_1.User.create({ name: 'Seller One', email: 'seller1@example.com', password: p, role: 'seller' });
    const seller1 = await seller_model_1.Seller.create({ userId: sellerUser1.id, storeName: 'Store One', city: 'Hyderabad' });
    const sellerUser2 = await user_model_1.User.create({ name: 'Seller Two', email: 'seller2@example.com', password: p, role: 'seller' });
    const seller2 = await seller_model_1.Seller.create({ userId: sellerUser2.id, storeName: 'Store Two', city: 'Hyderabad' });
    await product_model_1.Product.create({ sellerId: seller1.id, name: 'Apple', sku: 'APL-01', price: 50, stock: 100, unit: 'kg' });
    await product_model_1.Product.create({ sellerId: seller1.id, name: 'Banana', sku: 'BAN-02', price: 30, stock: 200, unit: 'dozen' });
    await product_model_1.Product.create({ sellerId: seller2.id, name: 'Milk', sku: 'MLK-01', price: 40, stock: 50, unit: 'litre' });
    const deliveryUser = await user_model_1.User.create({ name: 'Delivery One', email: 'delivery1@example.com', password: p, role: 'delivery' });
    const salesmanUser = await user_model_1.User.create({ name: 'Salesman One', email: 'sales1@example.com', password: p, role: 'salesman' });
    const customer1 = await user_model_1.User.create({ name: 'Customer One', email: 'cust1@example.com', password: p, role: 'customer' });
    const customer2 = await user_model_1.User.create({ name: 'Customer Two', email: 'cust2@example.com', password: p, role: 'customer' });
    const salesman = await salesman_model_1.Salesman.create({ userId: salesmanUser.id, area: 'Area 51' });
    await beat_model_1.Beat.create({ name: 'Beat A', salesmanId: salesman.id });
    await beat_model_1.Beat.create({ name: 'Beat B', salesmanId: salesman.id });
    console.log('Seed complete. Users: seller1 seller2 delivery salesman customer1 customer2');
    process.exit(0);
}
seed();

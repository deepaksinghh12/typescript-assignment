"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Product extends sequelize_1.Model {
}
exports.Product = Product;
Product.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    sellerId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    sku: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.TEXT },
    price: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
    stock: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    unit: { type: sequelize_1.DataTypes.STRING },
    active: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true }
}, { sequelize: database_1.sequelize, tableName: 'products' });

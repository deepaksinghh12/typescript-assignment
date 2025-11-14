"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class OrderItem extends sequelize_1.Model {
}
exports.OrderItem = OrderItem;
OrderItem.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    orderId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    productId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    sellerId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    qty: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    price: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
    accepted: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: true }
}, { sequelize: database_1.sequelize, tableName: 'orderItems' });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Order extends sequelize_1.Model {
}
exports.Order = Order;
Order.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    customerId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    status: { type: sequelize_1.DataTypes.STRING, allowNull: false, defaultValue: 'placed' },
    totalAmount: { type: sequelize_1.DataTypes.FLOAT, defaultValue: 0 },
    assignedDeliveryId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED },
    assignedSellerId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED }
}, { sequelize: database_1.sequelize, tableName: 'orders' });

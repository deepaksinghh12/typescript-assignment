"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delivery = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Delivery extends sequelize_1.Model {
}
exports.Delivery = Delivery;
Delivery.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    orderId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    deliveryPersonId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    status: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    proofUrl: { type: sequelize_1.DataTypes.STRING }
}, { sequelize: database_1.sequelize, tableName: 'deliveries' });

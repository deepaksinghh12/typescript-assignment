"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complaint = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Complaint extends sequelize_1.Model {
}
exports.Complaint = Complaint;
Complaint.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    orderId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    customerId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    description: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    imageUrl: { type: sequelize_1.DataTypes.STRING }
}, { sequelize: database_1.sequelize, tableName: 'complaints' });

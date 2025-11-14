"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visit = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Visit extends sequelize_1.Model {
}
exports.Visit = Visit;
Visit.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    salesmanId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    storeName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    remarks: { type: sequelize_1.DataTypes.TEXT },
    visitedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW }
}, { sequelize: database_1.sequelize, tableName: 'visits' });

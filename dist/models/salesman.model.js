"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Salesman = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Salesman extends sequelize_1.Model {
}
exports.Salesman = Salesman;
Salesman.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    userId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    area: { type: sequelize_1.DataTypes.STRING }
}, { sequelize: database_1.sequelize, tableName: 'salesmen' });

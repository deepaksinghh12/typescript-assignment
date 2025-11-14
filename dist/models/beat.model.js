"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beat = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Beat extends sequelize_1.Model {
}
exports.Beat = Beat;
Beat.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    salesmanId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED }
}, { sequelize: database_1.sequelize, tableName: 'beats' });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Seller extends sequelize_1.Model {
}
exports.Seller = Seller;
Seller.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    userId: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, allowNull: false },
    storeName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    city: { type: sequelize_1.DataTypes.STRING }
}, { sequelize: database_1.sequelize, tableName: 'sellers' });

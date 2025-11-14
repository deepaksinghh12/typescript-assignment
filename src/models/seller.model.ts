import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
export class Seller extends Model {
  public id!: number; public userId!: number; public storeName!: string; public city?: string;
}
Seller.init({
  id:{ type: DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true },
  userId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  storeName:{ type: DataTypes.STRING, allowNull:false },
  city:{ type: DataTypes.STRING }
}, { sequelize, tableName: 'sellers' });

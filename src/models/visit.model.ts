import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
export class Visit extends Model { public id!:number; public salesmanId!:number; public storeName!:string; public remarks?:string; public visitedAt?:Date; }
Visit.init({
  id:{ type: DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true },
  salesmanId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  storeName:{ type: DataTypes.STRING, allowNull:false },
  remarks:{ type: DataTypes.TEXT },
  visitedAt:{ type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, tableName: 'visits' });

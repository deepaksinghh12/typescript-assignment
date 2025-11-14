import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
export class Complaint extends Model { public id!:number; public orderId!:number; public customerId!:number; public description!:string; public imageUrl?:string; }
Complaint.init({
  id:{ type: DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true },
  orderId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  customerId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  description:{ type: DataTypes.TEXT, allowNull:false },
  imageUrl:{ type: DataTypes.STRING }
}, { sequelize, tableName: 'complaints' });

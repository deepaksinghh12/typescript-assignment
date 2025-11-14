import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
export class Beat extends Model { public id!:number; public name!:string; public salesmanId?:number; }
Beat.init({
  id:{ type: DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true },
  name:{ type: DataTypes.STRING, allowNull:false },
  salesmanId:{ type: DataTypes.INTEGER.UNSIGNED }
}, { sequelize, tableName: 'beats' });

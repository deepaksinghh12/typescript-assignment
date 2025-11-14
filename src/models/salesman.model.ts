import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
export class Salesman extends Model {
  public id!:number; public userId!:number; public area?:string;
}
Salesman.init({
  id:{ type: DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true },
  userId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  area:{ type: DataTypes.STRING }
}, { sequelize, tableName: 'salesmen' });

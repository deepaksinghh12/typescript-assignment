import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
export class Delivery extends Model {
  public id!:number; public orderId!:number; public deliveryPersonId!:number; public status!:string; public proofUrl?:string;
}
Delivery.init({
  id:{ type: DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true },
  orderId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  deliveryPersonId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  status:{ type: DataTypes.STRING, allowNull:false },
  proofUrl:{ type: DataTypes.STRING }
}, { sequelize, tableName: 'deliveries' });

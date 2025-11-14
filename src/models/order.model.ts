import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
export class Order extends Model {
  public id!: number; public customerId!: number; public status!: string; public totalAmount!: number; public assignedDeliveryId?: number; public assignedSellerId?: number;
}
Order.init({
  id:{ type: DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true },
  customerId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  status:{ type: DataTypes.STRING, allowNull:false, defaultValue:'placed' },
  totalAmount:{ type: DataTypes.FLOAT, defaultValue:0 },
  assignedDeliveryId:{ type: DataTypes.INTEGER.UNSIGNED },
  assignedSellerId:{ type: DataTypes.INTEGER.UNSIGNED }
}, { sequelize, tableName: 'orders' });

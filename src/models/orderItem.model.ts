import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
export class OrderItem extends Model {
  public id!:number; public orderId!:number; public productId!:number; public sellerId!:number; public qty!:number; public price!:number; public accepted?:boolean;
}
OrderItem.init({
  id:{ type: DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true },
  orderId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  productId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  sellerId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  qty:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  price:{ type: DataTypes.FLOAT, allowNull:false },
  accepted:{ type: DataTypes.BOOLEAN, allowNull:true }
}, { sequelize, tableName: 'orderItems' });

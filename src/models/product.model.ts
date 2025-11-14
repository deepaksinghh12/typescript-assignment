import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
export class Product extends Model {
  public id!: number; public sellerId!: number; public name!: string; public sku!: string; public description?: string; public price!: number; public stock!: number; public unit?: string; public active!: boolean;
}
Product.init({
  id:{ type: DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true },
  sellerId:{ type: DataTypes.INTEGER.UNSIGNED, allowNull:false },
  name:{ type: DataTypes.STRING, allowNull:false },
  sku:{ type: DataTypes.STRING, allowNull:false },
  description:{ type: DataTypes.TEXT },
  price:{ type: DataTypes.FLOAT, allowNull:false },
  stock:{ type: DataTypes.INTEGER, allowNull:false, defaultValue:0 },
  unit:{ type: DataTypes.STRING },
  active:{ type: DataTypes.BOOLEAN, defaultValue:true }
}, { sequelize, tableName: 'products' });

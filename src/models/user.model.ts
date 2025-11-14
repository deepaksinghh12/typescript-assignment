import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface UserAttributes { id:number; email:string; password:string; role:string; name:string; }
interface UserCreationAttributes extends Optional<UserAttributes,'id'>{}
export class User extends Model<UserAttributes,UserCreationAttributes> implements UserAttributes {
  public id!:number; public email!:string; public password!:string; public role!:string; public name!:string;
}
User.init({
  id:{ type: DataTypes.INTEGER.UNSIGNED, autoIncrement:true, primaryKey:true },
  email:{ type: DataTypes.STRING, allowNull:false, unique:true },
  password:{ type: DataTypes.STRING, allowNull:false },
  role:{ type: DataTypes.STRING, allowNull:false },
  name:{ type: DataTypes.STRING, allowNull:false }
}, { sequelize, tableName: 'users' });

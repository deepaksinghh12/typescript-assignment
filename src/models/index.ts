import { sequelize } from '../config/database';
import { User } from './user.model';
import { Seller } from './seller.model';
import { Product } from './product.model';
import { Order } from './order.model';
import { OrderItem } from './orderItem.model';
import { Delivery } from './delivery.model';
import { Salesman } from './salesman.model';
import { Beat } from './beat.model';
import { Visit } from './visit.model';
import { Complaint } from './complaint.model';

User.hasOne(Seller, { foreignKey: 'userId', as: 'sellerProfile' });
Seller.belongsTo(User, { foreignKey: 'userId' });

Seller.hasMany(Product, { foreignKey: 'sellerId' });
Product.belongsTo(Seller, { foreignKey: 'sellerId' });

Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

OrderItem.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(OrderItem, { foreignKey: 'productId' });

Order.belongsTo(User, { foreignKey: 'customerId', as: 'customer' });

Order.hasOne(Delivery, { foreignKey: 'orderId' });
Delivery.belongsTo(Order, { foreignKey: 'orderId' });

Salesman.hasMany(Visit, { foreignKey: 'salesmanId' });
Visit.belongsTo(Salesman, { foreignKey: 'salesmanId' });

export { sequelize, User, Seller, Product, Order, OrderItem, Delivery, Salesman, Beat, Visit, Complaint };

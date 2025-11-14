import { sequelize } from '../config/database';
import { User } from '../models/user.model';
import { Seller } from '../models/seller.model';
import { Product } from '../models/product.model';
import { Salesman } from '../models/salesman.model';
import { Beat } from '../models/beat.model';
import bcrypt from 'bcrypt';

async function seed(){
  await sequelize.sync({ force:true });
  const p = await bcrypt.hash('Password123',10);
  const sellerUser1 = await User.create({ name:'Seller One', email:'seller1@example.com', password:p, role:'seller' });
  const seller1 = await Seller.create({ userId: sellerUser1.id, storeName: 'Store One', city: 'Hyderabad' });
  const sellerUser2 = await User.create({ name:'Seller Two', email:'seller2@example.com', password:p, role:'seller' });
  const seller2 = await Seller.create({ userId: sellerUser2.id, storeName: 'Store Two', city: 'Hyderabad' });
  await Product.create({ sellerId: seller1.id, name: 'Apple', sku: 'APL-01', price: 50, stock:100, unit:'kg' });
  await Product.create({ sellerId: seller1.id, name: 'Banana', sku: 'BAN-02', price: 30, stock:200, unit:'dozen' });
  await Product.create({ sellerId: seller2.id, name: 'Milk', sku: 'MLK-01', price: 40, stock:50, unit:'litre' });

  const deliveryUser = await User.create({ name:'Delivery One', email:'delivery1@example.com', password:p, role:'delivery' });
  const salesmanUser = await User.create({ name:'Salesman One', email:'sales1@example.com', password:p, role:'salesman' });
  const customer1 = await User.create({ name:'Customer One', email:'cust1@example.com', password:p, role:'customer' });
  const customer2 = await User.create({ name:'Customer Two', email:'cust2@example.com', password:p, role:'customer' });

  const salesman = await Salesman.create({ userId: salesmanUser.id, area: 'Area 51' });
  await Beat.create({ name: 'Beat A', salesmanId: salesman.id });
  await Beat.create({ name: 'Beat B', salesmanId: salesman.id });
  console.log('Seed complete. Users: seller1 seller2 delivery salesman customer1 customer2');
  process.exit(0);
}

seed();

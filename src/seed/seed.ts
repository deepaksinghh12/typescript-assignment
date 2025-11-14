import { sequelize } from '../config/database';
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';

async function seed(){
  await sequelize.sync({ force:true });
  const p = await bcrypt.hash('Password123',10);
  await User.create({ name:'Seller One', email:'seller1@example.com', password:p, role:'seller' });
  await User.create({ name:'Delivery One', email:'delivery1@example.com', password:p, role:'delivery' });
  await User.create({ name:'Salesman One', email:'sales1@example.com', password:p, role:'salesman' });
  await User.create({ name:'Customer One', email:'cust1@example.com', password:p, role:'customer' });
  console.log('Seeded users');
  process.exit(0);
}
seed();

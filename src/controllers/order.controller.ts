import { Request, Response } from 'express';
import { Order } from '../models/order.model';
import { OrderItem } from '../models/orderItem.model';
import { Product } from '../models/product.model';
import { sequelize } from '../config/database';

export const createOrder = async (req:Request,res:Response)=>{
  const { customerId, items } = req.body; // items: [{ productId, qty }]
  try{
    const result = await sequelize.transaction(async (t)=>{
      const order = await Order.create({ customerId, status: 'placed' }, { transaction: t });
      let total = 0;
      for(const it of items){
        const prod = await Product.findByPk(it.productId, { transaction: t });
        if(!prod) throw new Error('Product not found');
        await OrderItem.create({ orderId: order.id, productId: prod.id, sellerId: prod.sellerId, qty: it.qty, price: prod.price }, { transaction: t });
        total += prod.price * it.qty;
      }
      await order.update({ totalAmount: total }, { transaction: t });
      return order;
    });
    res.status(201).json(result);
  }catch(e){ res.status(400).json({ error:String(e) }); }
};

export const getOrder = async (req:Request,res:Response)=>{
  const { id } = req.params;
  const order = await Order.findByPk(Number(id));
  if(!order) return res.status(404).json({ message:'Not found' });
  const items = await OrderItem.findAll({ where: { orderId: order.id } });
  res.json({ order, items });
};

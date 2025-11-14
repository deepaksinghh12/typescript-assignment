import { Request, Response } from 'express';
import { Product } from '../models/product.model';
import { Order } from '../models/order.model';
import { OrderItem } from '../models/orderItem.model';
import { sequelize } from '../config/database';

export const addProduct = async (req:Request,res:Response)=>{
  const sellerId = Number(req.body.sellerId || req.user?.id);
  const { name, sku, description, price, stock, unit } = req.body;
  const p = await Product.create({ sellerId, name, sku, description, price, stock, unit });
  res.status(201).json(p);
};

export const updateProduct = async (req:Request,res:Response)=>{
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if(!product) return res.status(404).json({ message:'Not found' });
  await product.update(req.body);
  res.json(product);
};

export const listOrders = async (req:Request,res:Response)=>{
  const sellerId = Number(req.user?.id);
  const items = await Order.findAll({ where: { assignedSellerId: sellerId } });
  res.json(items);
};

export const acceptOrderItems = async (req:Request,res:Response)=>{
  const { orderId } = req.params;
  const { acceptedItemIds } = req.body;
  try{
    await sequelize.transaction(async (t)=>{
      await OrderItem.update({ accepted: false }, { where: { orderId, sellerId: req.user?.id }, transaction: t });
      if(acceptedItemIds && acceptedItemIds.length) await OrderItem.update({ accepted: true }, { where: { id: acceptedItemIds }, transaction: t });
      const pending = await OrderItem.count({ where: { orderId, accepted: null }, transaction: t });
      if(pending === 0) await Order.update({ status: 'accepted' }, { where: { id: orderId }, transaction: t });
    });
    res.json({ success: true });
  }catch(e){ res.status(500).json({ error:String(e) }); }
};

export const assignDelivery = async (req:Request,res:Response)=>{
  const { orderId } = req.params;
  const { deliveryPersonId } = req.body;
  await sequelize.transaction(async (t)=>{
    await Order.update({ assignedDeliveryId: deliveryPersonId, status: 'readyForDispatch' }, { where: { id: orderId }, transaction: t });
  });
  res.json({ success: true });
};

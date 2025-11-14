import { Request, Response } from 'express';
import { Order } from '../models/order.model';
import { Delivery } from '../models/delivery.model';
import { sequelize } from '../config/database';

export const viewAssigned = async (req:Request,res:Response)=>{
  const deliveryPersonId = Number(req.user?.id);
  const deliveries = await Delivery.findAll({ where: { deliveryPersonId } });
  res.json(deliveries);
};

export const updateStatus = async (req:Request,res:Response)=>{
  const { orderId } = req.params;
  const { status, proofUrl } = req.body;
  await sequelize.transaction(async (t)=>{
    await Order.update({ status }, { where: { id: orderId }, transaction: t });
    await Delivery.create({ orderId: Number(orderId), deliveryPersonId: req.user?.id, status, proofUrl }, { transaction: t });
  });
  res.json({ success: true });
};

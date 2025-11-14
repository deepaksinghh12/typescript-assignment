import { Request, Response } from 'express';
import { Seller } from '../models/seller.model';
import { Product } from '../models/product.model';
import { Complaint } from '../models/complaint.model';

export const listStores = async (req:Request,res:Response)=>{
  const { city, area, pincode } = req.query;
  const sellers = await Seller.findAll({ where: { city: city || null } });
  res.json(sellers);
};

export const raiseComplaint = async (req:Request,res:Response)=>{
  const { orderId, description, imageUrl } = req.body;
  const complaint = await Complaint.create({ orderId, customerId: req.user?.id, description, imageUrl });
  res.status(201).json(complaint);
};

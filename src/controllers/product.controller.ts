import { Request, Response } from 'express';
import { Product } from '../models/product.model';
export const listSellerProducts = async (req:Request,res:Response)=>{
  const sellerId = Number(req.params.sellerId || req.user?.id);
  const items = await Product.findAll({ where: { sellerId } });
  res.json(items);
};
export const deactivateProduct = async (req:Request,res:Response)=>{
  const { id } = req.params;
  const p = await Product.findByPk(id);
  if(!p) return res.status(404).json({ message:'Not found' });
  await p.update({ active: false });
  res.json(p);
};

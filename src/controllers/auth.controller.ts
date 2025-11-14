import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import dotenv from 'dotenv';
dotenv.config();

export const signup = async (req:Request,res:Response)=> {
  const { name,email,password,role } = req.body;
  const hashed = await bcrypt.hash(password,10);
  const u = await User.create({ name,email,password:hashed,role });
  res.json({ id:u.id, email:u.email });
};

export const login = async (req:Request,res:Response)=> {
  const { email,password } = req.body;
  const u = await User.findOne({ where:{ email }});
  if(!u) return res.status(401).json({ message:'Invalid' });
  const ok = await bcrypt.compare(password, u.password);
  if(!ok) return res.status(401).json({ message:'Invalid' });
  const token = jwt.sign({ id:u.id, role:u.role, name:u.name }, process.env.JWT_SECRET||'secret', { expiresIn:'8h' });
  res.json({ token });
};

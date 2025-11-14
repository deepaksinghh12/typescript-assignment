import { Request, Response } from 'express';
import { Beat } from '../models/beat.model';
import { Visit } from '../models/visit.model';

export const viewBeats = async (req:Request,res:Response)=>{
  const beats = await Beat.findAll({ where: { salesmanId: req.user?.id } });
  res.json(beats);
};

export const markAttendance = async (req:Request,res:Response)=>{
  // simple attendance record as a visit with storeName 'attendance'
  await Visit.create({ salesmanId: req.user?.id, storeName: 'attendance', remarks: req.body.remarks || 'present' });
  res.json({ success: true });
};

export const logVisit = async (req:Request,res:Response)=>{
  const { storeName, remarks } = req.body;
  await Visit.create({ salesmanId: req.user?.id, storeName, remarks });
  res.json({ success: true });
};

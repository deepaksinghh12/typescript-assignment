"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logVisit = exports.markAttendance = exports.viewBeats = void 0;
const beat_model_1 = require("../models/beat.model");
const visit_model_1 = require("../models/visit.model");
const viewBeats = async (req, res) => {
    const beats = await beat_model_1.Beat.findAll({ where: { salesmanId: req.user?.id } });
    res.json(beats);
};
exports.viewBeats = viewBeats;
const markAttendance = async (req, res) => {
    // simple attendance record as a visit with storeName 'attendance'
    await visit_model_1.Visit.create({ salesmanId: req.user?.id, storeName: 'attendance', remarks: req.body.remarks || 'present' });
    res.json({ success: true });
};
exports.markAttendance = markAttendance;
const logVisit = async (req, res) => {
    const { storeName, remarks } = req.body;
    await visit_model_1.Visit.create({ salesmanId: req.user?.id, storeName, remarks });
    res.json({ success: true });
};
exports.logVisit = logVisit;

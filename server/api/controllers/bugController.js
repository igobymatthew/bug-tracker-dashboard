const Bug = require('../models/Bug');

exports.getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

exports.createBug = async (req, res) => {
  const newBug = new Bug(req.body);
  const saved = await newBug.save();
  res.status(201).json(saved);
};

exports.updateBug = async (req, res) => {
  const updated = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteBug = async (req, res) => {
  await Bug.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
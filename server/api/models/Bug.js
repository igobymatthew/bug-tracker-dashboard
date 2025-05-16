const mongoose = require('../scripts/sharedMongoose');


const bugSchema = new mongoose.Schema({
  title: String,
  description: String,
  severity: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
  status: { type: String, enum: ['open', 'in progress', 'closed'], default: 'open' },
  createdAt: { type: Date, default: Date.now },
  assignedTo: String
});

module.exports = mongoose.model('Bug', bugSchema);
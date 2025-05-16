const mongoose = require('./sharedMongoose');
const bcrypt = require('bcryptjs');
const Bug = require('../models/Bug.js');
const User = require('../models/User.js');


// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bugtracker';
const MONGO_URI = 'mongodb://127.0.0.1:27017/bugtracker';

const run = async () => {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');

  await Bug.deleteMany({});
  await User.deleteMany({});

  const password = await bcrypt.hash('password123', 10);

  const users = await User.insertMany([
    { username: 'admin', email: 'admin@example.com', password, role: 'admin' },
    { username: 'jane', email: 'jane@example.com', password, role: 'user' }
  ]);

  await Bug.insertMany([
    {
      title: 'Login not working',
      description: 'User gets redirected endlessly.',
      severity: 'high',
      status: 'open',
      assignedTo: users[0].username
    },
    {
      title: 'Dashboard blank on load',
      description: 'Needs refresh to render.',
      severity: 'medium',
      status: 'in progress',
      assignedTo: users[1].username
    }
  ]);

  console.log('Database seeded.');
  process.exit();
};

run().catch(err => {
  console.error(err);
  process.exit(1);
});
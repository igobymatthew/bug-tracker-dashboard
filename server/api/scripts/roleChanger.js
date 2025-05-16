const mongoose = require('./sharedMongoose');
const User = require('../models/User');

const MONGO_URI = 'mongodb://127.0.0.1:27017/bugtracker';

const run = async () => {
  const inputEmail = process.argv[2];
  const roleArg = process.argv[3]?.toLowerCase();

  if (!inputEmail || !roleArg || !['admin', 'user'].includes(roleArg)) {
    console.error('❌ Usage: node scripts/promoteUser.js <email> <admin|user>');
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const user = await User.findOne({ email: inputEmail });
    if (!user) {
      console.log(`❌ No user found with email: ${inputEmail}`);
    } else {
      user.role = roleArg;
      await user.save();
      console.log(`✅ User "${user.username}" role set to "${roleArg}".`);
    }

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();

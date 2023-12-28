const mongoose = require('mongoose');

const DBconnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = DBconnect;

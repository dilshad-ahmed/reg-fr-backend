const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dbUrl = process.env.DB_URI || "";

const connectDB = async () => {
  try {
    const data = await mongoose.connect(dbUrl);
    console.log(`Database connected with ${data.connection.host}`);
  } catch (err) {
    console.log(`Database connection error: ${err}`);
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;

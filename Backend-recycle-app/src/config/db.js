const mongoose = require("mongoose");
require("dotenv").config();
const db =
  "mongodb+srv://EcoPlast:EcoPlast@cluster0.nfz3caf.mongodb.net/?retryWrites=true&w=majority";
const connectToDatabase = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the application on a failed database connection
  }
};

module.exports = connectToDatabase;

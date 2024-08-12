// Import required packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToDatabase = require("./src/config/db");

// Load environment variables
require("dotenv").config();

// Initialize the Express application
const app = express();
const port = 4000;

// Middleware setup
app.use(cors()); // Note the parentheses to call the function
app.use(bodyParser.json()); // Use bodyParser.json() to parse JSON bodies

// Connect to MongoDB database
connectToDatabase();

// Define routes
const authRoutes = require("./src/routes/authRoutes");
const dropOffRoutes = require("./src/routes/dropOffRoutes");
const pickUpRoutes = require("./src/routes/pickUpRoutes");

// Use routes
app.use("/api/auth", authRoutes); // Add the leading slash
app.use("/api/dropOff", dropOffRoutes); // Add the leading slash
app.use("/api/pickUp", pickUpRoutes); // Add the leading slash

// Define a root route
app.get("/", (req, res) => {
  res.send("hello man");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

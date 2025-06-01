// backend/app.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./utils/logger");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/contact", contactRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Global error handler
app.use(errorHandler);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => logger.info("✅ MongoDB connected"))
  .catch((err) => logger.error("❌ MongoDB error:", err));

// Graceful shutdown
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    logger.info("🔌 MongoDB disconnected on app termination");
    process.exit(0);
  });
});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => logger.info(`🚀 Server running on port ${PORT}`));
}

module.exports = app;

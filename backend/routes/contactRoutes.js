// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/mailer");
const { body, validationResult } = require("express-validator");
const logger = require("../utils/logger");

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").matches(/^\d{10}$/).withMessage("Phone must be 10 digits"),
    body("message").notEmpty().withMessage("Message is required")
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.warn("Validation failed", { errors: errors.array() });
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      await sendEmail(req.body);
      res.status(200).json({ success: true, message: "Lead submitted successfully!" });
    } catch (error) {
      logger.error("Email sending failed", { error });
      next(error);
    }
  }
);

module.exports = router;
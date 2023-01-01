const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post('/twitter', authController.authenticateOnTwitter);

module.exports = router;
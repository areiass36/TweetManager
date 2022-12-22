const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get("/", userController.getUser);

router.delete("/delete", userController.deleteTweet);

module.exports = router;

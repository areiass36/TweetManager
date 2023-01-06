const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

/**
 * @openapi
 * /auth/twitter:
 *  post:
 *      description: Authenticates in twitter environment
 *      responses:
 *          200:
 *              description: User data
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                              name: 
 *                                  type: string
 *                              username: 
 *                                  type: string
 *                              profileImageUrl: 
 *                                  type: string
 *  securitySchemes:
 *      token:
 *          type: string
 *          name: token
 *          in: header
 *      
 */
router.post('/twitter', authController.authenticateOnTwitter);

module.exports = router;
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

/**
 * @openapi
 * /user/{id}:
 *  get:
 *      description: Gets user data
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
 *                              deletedTweetsCount: 
 *                                  type: number
 *                              profileImageUrl: 
 *                                  type: string
 */
router.get("/:id", userController.getUser);

/**
 * @openapi
 * /user/{id}:
 *  delete:
 *      description: Deletes user
 *      responses:
 *          200:
 *              description: Returns a boolean saying if the client was deleted or not
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              deleted:
 *                                  type: boolean
 *  parameters:
 *  - name: id
 *    in: path
 *    required: true
 */
router.delete("/:id", userController.deleteUser);

module.exports = router;

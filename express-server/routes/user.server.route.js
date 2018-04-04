// ./express-server/routes/user.server.route.js
import express from 'express';

// import controller file
import * as userController from '../controllers/user.server.controller';

// get a instance of express router
const router = express.Router();

router.route('/user/')
    .get(userController.getUsers)
    .post(userController.addUser)
    .put(userController.updateUser);

router.route('/user/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser);

export default router;

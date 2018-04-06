import express from 'express';

//import controller file
import * as todoController from '../controllers/todo.server.controller';
import * as userController from '../controllers/user.server.controller';
import * as authController from '../controllers/auth.controller';

// get an instance of express router
const router = express.Router();

router.route('/login/')
    .post(authController.login);

// router.route('/auth/')
//     .post(authController.auth);

router.route('/user/')
    .get(userController.getUsers)
    .post(userController.addUser)
    .put(userController.updateUser);

router.route('/user/id/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser);


router.route('/todo/')
     .get(todoController.getTodos)
     .post(todoController.addTodo)
     .put(todoController.updateTodo);

router.route('/todo/id/:id')
      .get(todoController.getTodo)
      .delete(todoController.deleteTodo);



export default router;

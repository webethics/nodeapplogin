var express = require('express');
var userRoutes = express.Router();
var bcrypt = require('bcrypt');

var VerifyToken = require('../middleware/authentication');
var UserController = require('../controllers/user');


/* =================== Add User ============================*/
userRoutes.post('/user/add',UserController.add_user);
  
/* =================== Login function  ============================*/

userRoutes.post('/user/userlogin',UserController.userlogin); 


/* ================ Forgot Password  ===================== */
userRoutes.post('/user/forgotpassword/',UserController.forgotpassword);


/* ================ Check Password code  ===================== */
userRoutes.get('/user/check_passcode/:id',UserController.check_passcode);


/* ================ Check Password code  ===================== */
userRoutes.post('/user/resetpassword/:id',UserController.resetpassword);


/* ================ User Verify ===================== */
userRoutes.get('/user/verify/:id',UserController.verify_code);

  
/* =================== Check  User Email  ============================*/

userRoutes.post('/user/user_email',UserController.check_email);

/* ===================  User list  ============================*/

userRoutes.get('/user',VerifyToken,UserController.getuser);

// Defined edit route
userRoutes.get('/user/edit/:id',UserController.edit_user);

/* =================== Update user  ============================*/
userRoutes.post('/user/update/:id',UserController.update_user);

/* =================== Delete user  ============================*/
userRoutes.get('/user/delete/:id',UserController.delete_user);


module.exports = userRoutes;
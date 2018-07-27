var express = require('express');
var adminRoutes = express.Router();
var bcrypt = require('bcrypt');

var VerifyToken = require('../middleware/authentication');
var AdminController = require('../controllers/admin/admin');



  
/* =================== Login function  ============================*/

adminRoutes.post('/admin/login',AdminController.adminlogin); 


/* ================ Forgot Password  ===================== */
adminRoutes.post('/user/forgotpassword/',AdminController.forgotpassword);


/* ================ Check Password code  ===================== */
adminRoutes.get('/user/check_passcode/:id',AdminController.check_passcode);


/* ================ Check Password code  ===================== */
adminRoutes.post('/user/resetpassword/:id',AdminController.resetpassword);


/* ================ User Verify ===================== */
adminRoutes.get('/user/verify/:id',AdminController.verify_code);

  
/* =================== Check  User Email  ============================*/

adminRoutes.post('/user/user_email',AdminController.check_email);

/* ===================  User list  ============================*/

adminRoutes.get('/admin/users',VerifyToken,AdminController.getuser);

// Defined edit route
adminRoutes.get('/user/edit/:id',AdminController.edit_user);

/* =================== Update user  ============================*/
adminRoutes.post('/user/update/:id',AdminController.update_user);

/* =================== Delete user  ============================*/
adminRoutes.get('/user/delete/:id',AdminController.delete_user);


module.exports = adminRoutes;
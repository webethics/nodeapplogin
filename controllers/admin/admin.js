var express = require('express');
var app = express();
var bcrypt = require('bcrypt');
const saltRounds = 10;
var config_secret = require('../../config/DB');
var User = require('../../models/User');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens 
var CommonFunction = require('../../config/common');
var constant = require('../../config/constant');
var nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');
var crypto = require("crypto");
var moment = require('moment');
var mongoose = require('mongoose');
 /* =================== Add User ============================*/
  exports.add_user = (req, res,next) =>{
	   var user = new User(req.body);
	   pwd = req.body.password;
	   var s_id = crypto.randomBytes(20).toString('hex');
	   var hashpass = bcrypt.hashSync(pwd, saltRounds);
		user.name  = req.body.name;
		user.phone = req.body.phone;
		user.email = req.body.email;
		user.user_type = 'user';
		user.password = hashpass;
		user.verification_code = s_id;
		User.addList(user,(err, user) => {
			if(err) {
				res.json({success: false, message: 'Failed to add new user.'});

			}
			 else if(user) {
				
				// var readHTMLFile = CommonFunction.readHTMLFile('public/pages/email.html');
				CommonFunction.readHTMLFile(constant.EmailTamplatePath+'/email.html', function(err, html) {
						var template = handlebars.compile(html);
						var message = "Please click  <a href ="+constant.front_end_url+"/verify/"+s_id+">here </a>to confirm your accout." ;
						var replacements = {
							 username: req.body.name,
							 message:message
						};
						
						var htmlToSend = template(replacements);
						var mailOptions = {
							from: 'my@email.com',
							to : req.body.email,
							subject : 'Signup Email',
							html : htmlToSend
						 };
						 
					    /* send Email */ 	
				        CommonFunction.send_email(mailOptions);
						
				  });

				 res.json({success:true, message: "User Added Successfully"});
			}
			else
				res.json({success:false,message: "Not added successfully"});
		  })  
  }
  
/* =================== User registeration confirmation code ============================*/
 exports.verify_code = (req, res)=>{
   var query = { 'verification_code': req.params.id };
   var updateData = { 'verification_code':''};
   User.findOneAndUpdate(query, updateData, function (err, user){
      if (err) throw err;
	  if(!user){
			 res.status(400).send({success:false,expire:false,message: "Wrong code used"});	  
	       }else{
			  /* var now  = moment(new Date());
			  var then = moment(user.verification_date,"DD/MM/YYYY HH:mm:ss") ;
			  var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
			  var d = moment.duration(ms);
			  var hrs = Math.floor(d.asHours());
		     if(hrs>24){
				  res.status(200).send({success:false,expire:true,message: "your code expire"});
			    }else{  */
                 res.status(200).send({success:true,expire:false,message: "Correct Code"});
				//}
		   }			  
    });
  }
 
 /* =================== Check User is already registred with Email  ============================*/
 exports.check_email = (req, res,next) => {
   var user = new User(req.body);
   email  = req.body.email;
   var query = { 'email': email };
    User.find(query,function(err, result) {
    if (err) throw err;
	  if(result.length >0){
			 //res.json({success:true, message: "Email Already Used."});
			  res.status(200).send({ success: true, message: 'Email Already Used.' });

	    }else{
             res.json({success:false,message: ""});
		}			  
    });
}

 /* =================== Login function  ============================*/
 exports.adminlogin = (req, res,next) => {
   var user = new User(req.body);
   pwd = req.body.password;
   email  = req.body.email;
   var query = { 'email': email};
    User.find(query,function(err, result) {
    if (err) throw err;
	  if(result.length >0){
		   if(result[0].verification_code!=''){
				res.json({ success:false,message: 'You Account is not verified. Please verify your account.'});
		    }else{	
				if(result[0].user_type =='admin'){
				  if(bcrypt.compareSync(pwd, result[0].password)){
						const payload = {
						  email: result[0].email, 
						  id: result[0]._id 
						 };
						 /* create Token  */
						 var token = jwt.sign(payload, config_secret.secret, {
							  expiresIn: "15d" 
							}); 

							// return the information including token as JSON
							res.json({ success: true,message: 'Login Successfully',admin_token:token });
						 //return res.redirect('/index');
					}else{
					  res.json({success: false, message: 'Password is not correct'});
					}
			   }else{
				      res.json({success: false, message: 'You are trying to login with wrong account.'});
			   }
			}
	    }else{
			  res.json({success: false, message: 'Email is not correct'}); 
			  //res.status(400).send("Email is not correct ");
		}	  
    });
}


/* =================== Forgot password  User ============================*/
  exports.forgotpassword = (req, res,next) =>{	  
	var pass_code = crypto.randomBytes(18).toString('hex');	
	var query = { 'email': req.body.email };
    var updateData = {'forgotpasword_code':pass_code,'forgotpasword_date':new Date()};
    User.findOneAndUpdate(query, updateData, function (err, user){
      if (err) throw err;
	  if(!user){
			 res.status(200).send({success:false,message: "You email not found."});	  
	       }else{
		
			 CommonFunction.readHTMLFile(constant.EmailTamplatePath+'/email.html', function(err, html) {
						var template = handlebars.compile(html);
						var message = "Please click  <a href ="+constant.front_end_url+"/resetpassword/"+pass_code+">here </a>to reset passsword." ;
						var replacements = {
							 username: req.body.name,
							 message:message
						};
						
						var htmlToSend = template(replacements);
						var mailOptions = {
							from: 'my@email.com',
							to : req.body.email,
							subject : 'Forgot Password',
							html : htmlToSend
						 };
						 
					    /* send Email */ 	
				        CommonFunction.send_email(mailOptions);
						
						res.status(200).send({success:true,message: "Please check Your email to reset the password."});	
		      })			  
       }
  
    });
  }

/* =================== Check password code is correct,expire etc .   ============================*/
exports.check_passcode = (req, res,next) => {
   var query = { 'forgotpasword_code': req.params.id };
   User.find(query,function(err, result) {
      if (err) throw err;
	  if(result.length >0){	
		      var now  = moment(new Date());
			  var then = moment(result[0].forgotpasword_date,"DD/MM/YYYY HH:mm:ss") ;
			  var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
			  var d = moment.duration(ms);
			  var hrs = Math.floor(d.asHours());
		     if(hrs>24){
				  res.status(200).send({success:false,expire:true,message: "This link has been expired."});
			    }else{
                 res.status(200).send({success:true,expire:false,message:""});
				}
			  
	       }else{ 
			res.status(200).send({success:false,expire:false,message: "Your code is wrong."});	 
		   }			  
    });
}
 /* ============= RESET PASSWORD ================================*/
  exports.resetpassword = (req, res,next) =>{	  
    var query = { 'forgotpasword_code': req.params.id };
	pwd = req.body.password ;
	var hashpass = bcrypt.hashSync(pwd, saltRounds);
    var updateData = {password:hashpass,'forgotpasword_code':'','forgotpasword_date':''};
    User.findOneAndUpdate(query, updateData, function (err, user){
      if (err) throw err;
	  if(!user){
		  
			 res.status(200).send({success:false,message: "You password didn't change"});	  
			 
	       }else{    
		   
			 res.status(200).send({success:true,message: "Your password has been changed."});	
		     			  
        }
  
    });
  }
  
/* ===================GET USER   ============================*/
exports.getuser = (req, res,next) => {
   var query = { 'user_type':'user' };
   User.find(query, function (err, userData) {
	if(err){
      console.log(err);
    }
    else {
      res.json(userData);
    }
   });   
}

// Edit user 
exports.edit_user = (req, res)=>{
  var id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
}

 /* =================== Update user  ============================*/
exports.update_user = (req, res,next) => {
   User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      user.name  = req.body.name;
      user.phone = req.body.phone;
      user.email = req.body.email;
      user.save().then(user => {
         res.status(200).send({success: true, message: 'User Updated Successfully'});
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}

 /* =================== Delete user  ============================*/
exports.delete_user = (req, res,next) => {
   User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
}

//module.exports = userRoutes;
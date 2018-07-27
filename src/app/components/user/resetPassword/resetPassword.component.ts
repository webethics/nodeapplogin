import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PasswordValidator } from '../../../validator/password.validator';

@Component({
  selector: 'app-reset',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.css']
})
export class ResetPasswordComponent implements OnInit {
  angForm: FormGroup;
  title = 'Reset Password';
  result :any ="";
  passwordFormGroup: FormGroup;

  
  constructor(private _flashMessagesService: FlashMessagesService,private route: ActivatedRoute, private router: Router, private userservice: UserService, private fb: FormBuilder	) { 
    this.resetPasswordForm();
   }

  resetPasswordForm() {
  this.passwordFormGroup = this.fb.group({
		   password:['',  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
		   repeatPassword: ['', Validators.required]
		}, {
		  validator: PasswordValidator.validate.bind(this)
		});
		this.angForm = this.fb.group({
			  passwordFormGroup: this.passwordFormGroup
		});
   }

  resetPassword(password) {
	this.route.params.subscribe(params => {
		this.userservice.resetPassword(password,params['id']).subscribe(result => {
				 if(result.success){
					 this._flashMessagesService.show(result.message, { cssClass: 'alert-success',timeout:5000});
						setTimeout(() => {
						//localStorage.setItem('login_token', result.token);
						this.router.navigate(['/login']);
						},4000);
					 
				  }else{
					  this._flashMessagesService.show(result.message, { cssClass: 'alert-danger',timeout:5000});
				  } 
		  });	
  });  
	  
  }

  ngOnInit() {
	   this.route.params.subscribe(params => {
       this.userservice.password_code(params['id']).subscribe(result => {
       //this.user = res;
	     if(result.success){
		        // this._flashMessagesService.show(result.message, { cssClass: 'alert-success',time:10000});
			  }else{
				  this._flashMessagesService.show(result.message, { cssClass: 'alert-danger',time:1000});
			  }
	   
	   
	     //this.success = res.success;
	     //this.expire = res.expire;
	   
      });
    });
	
  }
}



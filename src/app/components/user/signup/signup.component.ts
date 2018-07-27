import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormGroup,  FormBuilder,  Validators ,FormControl} from '@angular/forms';
import { PasswordValidator } from '../../../validator/password.validator';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'SignUp';
  result:any = '';
  response :any="";
  //response_success :any ="";
  angForm: FormGroup;
  passwordFormGroup: FormGroup;
  
  constructor(private _flashMessagesService: FlashMessagesService,private userservice: UserService, private fb: FormBuilder) {
    this.createForm();
   }

    /* Signup Form validation */ 
   createForm() {
	   this.passwordFormGroup = this.fb.group({
		   password:['',  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
		   repeatPassword: ['', Validators.required]
		}, {
		  validator: PasswordValidator.validate.bind(this)
		});
		this.angForm = this.fb.group({
			  name: ['',  Validators.required ],
			  phone: ['', Validators.required ],
			  email: new FormControl('', Validators.compose([
			  Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
			  passwordFormGroup: this.passwordFormGroup
		});
   }
  
   /* *** add user ** */
  emailAlready(email) {
      this.userservice.emailAlready(email).subscribe(result => {
           // console.log(result);
		   this.response = result;
              /*  this.response = { 
				success: result['success'],
				message: result['message']
				} */
	  });
  }
  
  /* *** Add User ** */
  addUser(name, email,phone,password) {
      this.userservice.addUser(name, email,phone,password).subscribe(result =>
	  {
		    if(result.success){
		      this._flashMessagesService.show('Thanks for registeration. Please check your email to confirm your account.', { cssClass: 'alert-success',timeout:10000}); 
			   this.angForm.reset();
			  }else{
				  this._flashMessagesService.show(result.message, { cssClass: 'alert-danger',timeout:5000});
			  }
		   
	  });

	 //console.log('=='+this.message.message)
  }
  ngOnInit() {
  }
}

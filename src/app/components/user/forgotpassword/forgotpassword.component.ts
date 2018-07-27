import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { FormGroup,  FormBuilder,  Validators ,FormControl} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  angForm: FormGroup;
  title = 'Forgot Password';
  result :any ="";

  constructor(private _flashMessagesService: FlashMessagesService,private route: ActivatedRoute, private router: Router, private userservice: UserService, private fb: FormBuilder	) { 
    this.ForgotForm();
   }

  ForgotForm() {
    this.angForm = this.fb.group({
      email: new FormControl('', Validators.compose([
			  Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
   });
  }

  forgot_password(email,password) {
	   
	  this.userservice.forgot_password(email).subscribe(result => {
		  
		    /* if success then flash message for 5 seconds */ 
			 if(result.success){
				 this.angForm.reset();
		         this._flashMessagesService.show(result.message, { cssClass: 'alert-success',timeout:5000});
				
				 
			  }else{
				  this._flashMessagesService.show(result.message, { cssClass: 'alert-danger',timeout:5000});
			  }

	  });
}

  ngOnInit() {
	
	
  }
}



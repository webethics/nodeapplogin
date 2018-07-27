import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { FormGroup,  FormBuilder,  Validators,FormControl } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  title = 'Login User';
  //error :any="";
  result :any ="";

  
  constructor(private _flashMessagesService: FlashMessagesService,private route: ActivatedRoute, private router: Router, private userservice: UserService, private fb: FormBuilder	) { 
    this.LoginForm();
   }

  LoginForm() {
    this.angForm = this.fb.group({
      email: new FormControl('', Validators.compose([
			  Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: ['', Validators.required ],
   });
  }

  LoginUser(email,password) {
	   
	  this.userservice.login_user(email,password).subscribe(result => {
	  
	        	//this.error = result;
			 if(result.success){
				 
		          // this._flashMessagesService.show(result.message, { cssClass: 'alert-success',timeout:2000});
				 //setTimeout(() => {
					localStorage.setItem('login_token', result.token);
					this.router.navigate(['/users']);
				//	},1000);
				 
			  }else{
				  this._flashMessagesService.show(result.message, { cssClass: 'alert-danger',timeout:3000});
			  }
				
				
				if(result.success){
				
				}
			   /* this.error = { 
				success: result['success'],
				message: result['message']
				}	 */		
	  });
    /* this.route.params.subscribe(params => {
    this.service.updateUser(name, phone,email, params['id']);
    this.router.navigate(['index']);
  }); */
}

  ngOnInit() {
	
  }
}



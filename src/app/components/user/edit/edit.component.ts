import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: any;
  angForm: FormGroup;
  title = 'Edit User';
  constructor(private _flashMessagesService: FlashMessagesService,private route: ActivatedRoute, private router: Router, private service: UserService, private fb: FormBuilder) {
    this.editForm();
   }

  editForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      phone: ['', Validators.required ],
      email: ['', Validators.required ]
   });
  }

  updateUser(name,email,phone) {
	  
    this.route.params.subscribe(params => {
	this.service.updateUser(name, phone,email, params['id']).subscribe(result => {
			if(result.success){
				this._flashMessagesService.show(result.message, { cssClass: 'alert-success',timeout:3000});
				setTimeout(() => {
				 this.router.navigate(['users']);
				},3000);		
			}	 
	  });
	
	
	
  });
}

  ngOnInit() {
	 
    this.route.params.subscribe(params => {
      this.user = this.service.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }
}
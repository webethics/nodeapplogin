import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-verify',
  templateUrl: './signupconfirm.component.html',
  styleUrls: ['./signupconfirm.component.css']
})
export class SignupConfirmComponent implements OnInit {
  success: any;
  expire: any;
  
  constructor( private service: UserService,private router: Router,private route: ActivatedRoute) {}
  ngOnInit() {
   this.verify_code();
 
  }

  /*  Get user info */ 
  verify_code() {
    this.route.params.subscribe(params => {
       this.service.verify_code(params['id']).subscribe(res => {
       //this.user = res;
	     this.success = res.success;
	     this.expire = res.expire;
	   
      });
    });
  }

  
  
}
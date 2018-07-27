import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users: any;
  
  constructor(private http: HttpClient, private service: UserService,private router: Router) {}
  ngOnInit() {
    this.getUsers();
  }

  /*  Get user info */ 
  getUsers() {
    this.service.getUsers().subscribe(res => {
		
      this.users = res;
	  console.log(res);
	  
    },err=>{
		
		console.log(err);
		
		     //   this.router.navigate(['login']);
		    
	});
  }
  
  deleteUser(id) {
    this.service.deleteUser(id).subscribe(res => {
      console.log('Deleted');
    });
}
  
  
}
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   constructor(private router: Router) {}

  ngOnInit() {
  }

  
  logout(){
  localStorage.setItem('login_token', '');
  this.router.navigate(['login']);
}

isLoggedIn() {
    let token = localStorage.getItem('login_token');
	if(token){
		return true ;
	}else{
		return false ;
	}
  }
}

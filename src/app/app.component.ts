import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to crypto world';
  
      constructor(private router: Router) {}
   //constructor(private router: Router) {}
   

    ngOnInit() {
        // 1st parameter is a flash message text
        // 2nd parameter is optional. You can pass object with options.
    }
  
}
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) {}

 public headers_token(): any {
	 
	 alert();
    let token = localStorage.getItem('login_token');
	return token;
	//let headers = new HttpHeaders();
   // return headers = headers.append('token', token);
  }
  
 
}



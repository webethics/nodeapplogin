import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  /*  Add User  */
 public addUser(name,email,phone,password): any {
    const uri = environment.apiUrl+'user/add';  //API
    const obj = {
      name: name,
      phone: phone,
	  email :email,
	  password :password
    };
    return this
      .http
      .post(uri, obj);
  }
  
    /*  Call Email Already exist API   */
  public emailAlready(email): any {
    const uri = environment.apiUrl+'user/user_email'; //API 
    const obj = {
	  email :email
    };
    return this
      .http
      .post(uri, obj);
  }
  
 /*  Call Login API   */
  public login_user(email,password): any {
    const uri = environment.apiUrl+'user/userlogin';
    const obj = {
	  email :email,
	  password :password,
    };
    return this
      .http
      .post(uri, obj);
  }
  
 /*  Get Current logged in user data*/
  public getUsers(): any {
	let token = localStorage.getItem('login_token');
	let headers = new HttpHeaders();
    headers = headers.append('token', token); 
    const uri = environment.apiUrl+'user';
    return this
            .http
            .get(uri,{headers:headers})
            .map(res => {
              return res;
            });
  }
 /*  Get user data and return to Edit conponent*/
  public editUser(id): any {
    const uri = environment.apiUrl+'user/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
 /* Call user profile update API */ 
 public updateUser(name, phone,email, id): any {
    const uri = environment.apiUrl+'user/update/' + id;

    const obj = {
      name: name,
      phone: phone,
      email: email
    };
    return this
      .http
      .post(uri, obj);
  }
 
  /* Call verify user account API */ 
  public verify_code(id): any {
    const uri = environment.apiUrl+'user/verify/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
  
   public forgot_password(email): any {
    const uri = environment.apiUrl+'user/forgotpassword';
    const obj = {
      email: email
    };
    return this
      .http
      .post(uri, obj);
  
  }
  /* Request node to check password code */ 
   public password_code(id): any {
    const uri = environment.apiUrl+'user/check_passcode/'+id;
     return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
   }
   
  /* Reset passwrd */ 
  public resetPassword(password,id): any {
    const uri = environment.apiUrl+'user/resetpassword/'+id;;
    const obj = {
      password: password
    };
    return this
      .http
      .post(uri, obj);
  }
  

 
  public deleteUser(id): any {
    const uri = environment.apiUrl+'user/delete/' + id;
        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
     }
}



import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class AlbumService {

  constructor(private http: HttpClient) {}

 public addAlbum(formdta): any {
	 
    const uri = environment.apiUrl+'album/add';
	let token = localStorage.getItem('login_token');
	let headers = new HttpHeaders();
    headers = headers.append('token', token); 
    return this
      .http
      .post(uri, formdta,{headers:headers});
  }




 public getAlbums(): any {
	  
	let token = localStorage.getItem('login_token');
	let headers = new HttpHeaders();
    headers = headers.append('token', token); 
    const uri = environment.apiUrl+'albums';
    return this
            .http
            .get(uri,{headers:headers})
            .map(res => {
              return res;
            });
  }

  public deleteAlbum(id): any {
    const uri = environment.apiUrl+'album/delete/' + id;
	
	let token = localStorage.getItem('login_token');
	let headers = new HttpHeaders();
    headers = headers.append('token', token); 
	
        return this
            .http
            .get(uri,{headers:headers})
            .map(res => {
              return res;
            });
     }


}
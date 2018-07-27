import { AlbumService } from './../../services/album.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-album',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class AlbumComponent implements OnInit {
  albums: any;
  server_url: any;
  
  constructor(private http: HttpClient, private service: AlbumService,private router: Router) {}
  ngOnInit() {
    this.getAlbums();
  }

  /*  Get user info */ 
  getAlbums() {

    this.service.getAlbums().subscribe(res => {	
	   //if(res.success==true){
        this.albums = res;
        this.server_url = environment.server_url;
	  // }
	 // console.log(res);
    },err=>{
		 this.router.navigate(['login']);
		    
	});
  }
  
  deleteAlbum(id) {
    this.service.deleteAlbum(id).subscribe(res => {
		//console.log(res.success); 
		//if(res.success==true)
			  this.getAlbums();
           // window.location.reload();
    });
}
  
  
}
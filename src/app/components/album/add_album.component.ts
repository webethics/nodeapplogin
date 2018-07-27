import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from './../../services/album.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import {  HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-album',
  templateUrl: './add_album.component.html'
})
export class AddAlbumComponent implements OnInit {
  albumform: FormGroup;
  loading: boolean = false;
  title = 'Add Albumm';

  @ViewChild('fileInput') fileInput: ElementRef;
	
  constructor(private _flashMessagesService: FlashMessagesService,private route: ActivatedRoute, private router: Router, private albumService: AlbumService, private fb: FormBuilder) {
  //constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService, private fb: FormBuilder) {
	  
    this.AlbumForm();
   }

  AlbumForm() {
    this.albumform = this.fb.group({
      name: ['', Validators.required ],
	  photo: ['', Validators.required ]
      
   });
  }
  
 private prepareSave(): any {
    let input = new FormData();
    // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
    input.append('name', this.albumform.get('name').value);
    input.append('photo', this.albumform.get('photo').value);
    return input;
  }

   onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.albumform.get('photo').setValue(file);
    }
  }
  
    clearFile() {
    this.albumform.get('photo').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
  
  
  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
	this.albumService.addAlbum(formModel).subscribe(result => {
			if(result.success){
				this._flashMessagesService.show(result.message, { cssClass: 'alert-success',timeout:4000});
				setTimeout(() => {
				this.router.navigate(['album']);
				this.loading = false;
    
				},2000);
				
				
			}
	        	
			 
	  });
	
	
    /*setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      //alert('done!');
    
    }, 1000); */
  }

  ngOnInit() {
	//this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success'});
  }
}



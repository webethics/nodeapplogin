import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/user/user/index.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { SignupConfirmComponent } from './components/user/signupconfirm/signupconfirm.component';
import { ForgotPasswordComponent } from './components/user/forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './components/user/resetPassword/resetPassword.component';

import { EditComponent } from './components/user/edit/edit.component';

import { LoginComponent } from './components/user/login/login.component';

import { AlbumComponent } from './components/album/index.component';
import { AddAlbumComponent } from './components/album/add_album.component';



import { appRoutes } from './routerConfig';

import { UserService } from './services/user.service';
import { AlbumService } from './services/album.service';
@NgModule({
  declarations: [
    AppComponent,
	HeaderComponent,
	FooterComponent,
    IndexComponent,
    SignupComponent,
	SignupConfirmComponent,
	ForgotPasswordComponent,
	ResetPasswordComponent,
    LoginComponent,
    EditComponent,
	AlbumComponent,
	AddAlbumComponent
	
  ],
  imports: [
    BrowserModule, 
	RouterModule.forRoot(appRoutes), 
	HttpClientModule, 
	ReactiveFormsModule,
	FlashMessagesModule.forRoot()
  ],
  providers: [UserService,AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { Routes } from '@angular/router';
import { SignupComponent } from './components/user/signup/signup.component';
import { EditComponent } from './components/user/edit/edit.component';
import { IndexComponent } from './components/user/user/index.component';
import { LoginComponent } from './components/user/login/login.component';
import { AlbumComponent } from './components/album/index.component';
import { AddAlbumComponent } from './components/album/add_album.component';
import { SignupConfirmComponent } from './components/user/signupconfirm/signupconfirm.component';
import { ForgotPasswordComponent } from './components/user/forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './components/user/resetPassword/resetPassword.component';
 
export const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'create', component: SignupComponent },
  { path: 'forgot',component: ForgotPasswordComponent},
  { path: 'resetpassword/:id',component: ResetPasswordComponent},
  { path: 'verify/:id', component: SignupConfirmComponent },
  { path: 'edit/:id', component: EditComponent},
  { path: 'users', component: IndexComponent},
  { path: 'album',component: AlbumComponent},
  { path: 'addalbum',component: AddAlbumComponent}
  
  
  
];
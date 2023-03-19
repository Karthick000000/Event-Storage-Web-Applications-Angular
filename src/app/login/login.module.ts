import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { AppModule } from '../../app/app.module';




@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class LoginModule implements AppModule{

  // api_list= new Array();
  // const api_list = {}
  // login_submit='http://192.168.0.95:5001/login';

 }

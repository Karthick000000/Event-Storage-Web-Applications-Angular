import { Component, OnInit } from '@angular/core';
import { LoginModule } from '../login.module';
import { AppComponent } from '../../app.component';
import { ApilistService } from '../../services/apilist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    // '../../../static/login/css/style.css',
    '../../../static/login/css/custom.css',
    '../../../static/login/css/app.min.css',
    // '../../../static/libs/flatpickr/flatpickr.min.css',
  ],
})

export class LoginComponent implements LoginModule {

  constructor(
    public myapp: AppComponent,
    public api: ApilistService,
    private router: Router,

    )
   {

     }
   href:any;
   activated='false';
  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
    var user=this.myapp.storage.retrieve('user'); 
    if(this.href=='/login/activated'){
      this.activated='true';
    }else{
      if(!user|| user==null ){ 
        this.myapp.router.navigateByUrl('login');
      }else{
        this.myapp.router.navigateByUrl('dashboard');
      }
    }
    
   
  }
  model: any = {};
  submitForm() {
    var email_regex = /\S+@\S+\.\S+/;
    if(this.model.email==''||this.model.email==undefined){
      this.myapp.toastError('Email id cannot be empty');
    }else if(email_regex.test(this.model.email)==false){
      this.myapp.toastError('Incorrect email id format');
    }else if(this.model.password==''||this.model.password==undefined){
      this.myapp.toastError('Password cannot be empty');
    }else{
    var formData = {
      "email": this.model.email,
      "password": this.model.password
    };
    var url = this.api.apiList.login
    var data= formData;
    this.myapp.sendPostRequest(url,data).subscribe(
      res => {
        if(res.code==200 ){
          console.log(res);
          this.myapp.toastSuccess(res.msg);
          var this_user={
            'access_token':res.data.access_token,
            'refresh_token':res.data.refresh_token,
            'user_details':res.data.result,
            'role_data':res.data.roleData,
            'organization':res.data.organization,
            'addon':res.data.addon
          }
          
          this.myapp.storage.store('user',this_user);
          let redirect='events';
          this.myapp.router.navigateByUrl(redirect);
        }else{
          this.myapp.toastError(res.msg);
        }
      }
     );
    }
  }

  checkSession() {
    var name = this.myapp.storage.retrieve('name');
    console.log(name);
  }

  clearSession() {
    this.myapp.storage.clear('name');
  }

  signup(){
    this.myapp.router.navigateByUrl('login/signup');
  }
  forgotPassword(){
    this.myapp.router.navigateByUrl('forgot_password');
  }
}

import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ApilistService } from '../../services/apilist.service';
import { FormsModule } from '@angular/forms'
import { CommonComponent } from '../../common/common.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',
    // '../../../static/login/css/style.css',
    '../../../static/login/css/custom.css',
    '../../../static/login/css/app.min.css',
    // '../../../static/libs/flatpickr/flatpickr.min.css',
    // '../../../static/libs/bootstrap-tagsinput/bootstrap-tagsinput.css',
    // '../../../static/libs/select2/select2.min.css',
    // '../../../static/libs/multiselect/multi-select.css',
    // '../../../static/css/bootstrap.min.css',
    // '../../../static/css/icons.min.css',
    // '../../../static/css/app.min.css',
    // '../../../static/libs/datatables/responsive.bootstrap4.min.css',
    // '../../../static/libs/datatables/buttons.bootstrap4.min.css',
    // '../../../static/libs/datatables/select.bootstrap4.min.css',
    // '../../../static/libs/datatables/dataTables.bootstrap4.min.css',
    // '../../../static/libs/sweetalert2/sweetalert2.min.css',
    // '../../../static/css/design.css',
  ]
})
export class SignupComponent implements OnInit {

  constructor(
    public myapp: AppComponent,
    public api: ApilistService,
    public common: CommonComponent,
    private router: Router,
  ) { }


  incorrect_email='false';
  password_dont_match='false';
  
  ngOnInit(): void {

    this.incorrect_email='false';
    this.password_dont_match='false';
  }
  bodyClass = "signup";
  signupModel: any = {};

  checkEmail(){
    var email_regex = /\S+@\S+\.\S+/;
    if(email_regex.test(this.signupModel.email) == false){
      this.incorrect_email='true';
    }else{
      this.incorrect_email='false';
    }
  }
  checkPassword(){
   if(this.signupModel.password!==''){
     if(this.signupModel.password!=this.signupModel.confirm_password){
       this.password_dont_match='true';
     }else{
       this.password_dont_match='false';
     }
   }else{
    this.password_dont_match='false';
   }
  }

  signUp() {
    var email_regex = /\S+@\S+\.\S+/;
    if (this.signupModel.name == '' || this.signupModel.name == undefined) {
      this.myapp.toastError('Name cannot be empty');
    } else if (this.signupModel.email == '' || this.signupModel.email == undefined) {
      this.myapp.toastError('Email cannot be empty');
    } else if (email_regex.test(this.signupModel.email) == false) {
      this.incorrect_email='true';
    } else if (this.signupModel.password == '' || this.signupModel.password == undefined) {
      this.myapp.toastError('Password cannot be empty');
    } else {
      var formData = {
        "email": this.signupModel.email,
        "password": this.signupModel.password,
        "name": this.signupModel.name,
        "phone": this.signupModel.phone,
        "coupon": this.signupModel.coupon,
        
      };
      var url = this.api.apiList.addUser
      var data = formData;
      this.myapp.sendPostRequest(url, data).subscribe(
        res => {
          if (res.code == 200) {
            console.log(res);
            this.myapp.toastSuccess(res.msg);
            let redirect='login';
            this.myapp.router.navigateByUrl(redirect);
          } else {
            this.myapp.toastError(res.msg);
          }
        }
      );
    }
  }
  onsubmit(data: any) {
    console.log(data);
  }
  login(){
    this.myapp.router.navigateByUrl('login');
  }
}



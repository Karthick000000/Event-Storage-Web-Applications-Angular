import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApilistService } from './services/apilist.service';
import { SessionService } from './services/session.service';

import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  '../static/libs/flatpickr/flatpickr.min.css',
  '../static/libs/bootstrap-tagsinput/bootstrap-tagsinput.css',
  '../static/libs/select2/select2.min.css',
  '../static/libs/multiselect/multi-select.css',
  '../static/css/bootstrap.min.css',
  '../static/css/icons.min.css',
  '../static/css/app.min.css',
  '../static/libs/datatables/responsive.bootstrap4.min.css',
  '../static/libs/datatables/buttons.bootstrap4.min.css',
  '../static/libs/datatables/select.bootstrap4.min.css',
  '../static/libs/datatables/dataTables.bootstrap4.min.css',
  '../static/libs/sweetalert2/sweetalert2.min.css',
  '../static/css/design.css']
})
export class AppComponent {
  public static get DateFormat() {
    const MY_FORMATS = {
       parse: {
         dateInput: 'LL',
       },
       display: {
         dateInput: 'DD-MM-YYYY',
         monthYearLabel: 'MMM YYYY',
         dateA11yLabel: 'LL',
         monthYearA11yLabel: 'MMM YYYY',
       },
     };
     return MY_FORMATS;
 }
  constructor
  (public http: HttpClient, public storage: LocalStorageService, public router: Router,public modalService: NgbModal,public api:ApilistService,public session : SessionService,)
  { 
    
  }
  ngOnInit(): void {
    //this.getNotification()
    //alert('ddd');
  }

  public modalRef:any;
  
  notification:any[]=[];
  //Title
  title = 'Event Project';
  modal_title ='';
  modals = {
    'AddEventComponent' : AddEventComponent,
    'EditEventComponent' : EditEventComponent,

  };
  auth_token:any;
  getRequest(url:any){
    var user=this.session.storage.retrieve('user');
    this.auth_token=user.access_token;
      var reqHeader = new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.auth_token
       });
      return this.http.get(url, { headers: new HttpHeaders({ 
        'Authorization': 'Bearer ' + this.auth_token
     }).delete('Content-Type')});
  }

getNotification(){
  const url = this.api.apiList.notification;
  console.log(url)
  this.getRequest(url).subscribe(
      (res:any) => {
        if (res.code == 200) {
          this.notification=res.data.items;
          console.log('notification');
          console.log(this.notification);
        }
  })
}

  
  //Success Msg - Toastr
  toastSuccess(msg: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,

    })
    Toast.fire({
      icon: 'success',
      title: msg
    })
  }

  //Error Msg - Toastr
  toastError(msg: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    })
    Toast.fire({
      icon: 'error',
      title: msg
    })
  }

  //Post Request
  sendPostRequest(url: any, data: any): Observable<any> { 
    return this.http.post<any>(url, data,{ headers: new HttpHeaders().delete('Content-Type')});
  }
  sendGetRequest(url: any): Observable<any> { 
    alert(url)
    return this.http.get<any>(url,{ headers: new HttpHeaders().delete('Content-Type')});
  }

}


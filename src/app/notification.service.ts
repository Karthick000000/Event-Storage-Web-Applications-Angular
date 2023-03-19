import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApilistService } from './services/apilist.service';
import { SessionService } from './services/session.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public http: HttpClient,public session : SessionService,public api:ApilistService) { }


  notification:any[]=[];
  notification1=5;
  getNotifications(){
    alert('ghhg');
    const url = this.api.apiList.notification;
    console.log(url)
    this.getRequest(url).subscribe(
        (res:any) => {
          if (res.code == 200) {
            this.notification=res.data.items;
            console.log('notification');
            console.log(this.notification); 
          }
          return this.notification;
    })
  }

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
  

}

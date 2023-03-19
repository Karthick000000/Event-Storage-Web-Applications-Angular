import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(public storage: LocalStorageService, public router: Router,) { }
  public user='';
  clearSession() {
    
  }
  checkSession(){
    var this_user=this.storage.retrieve('user');
    if(this_user && this_user!=null){
      if(this_user.access_token==undefined||this_user.access_token==''){
        this.clearSession();
      }else{
        this.user=this_user;
        
      }
    }else{
      this.clearSession();
    }
  }
}

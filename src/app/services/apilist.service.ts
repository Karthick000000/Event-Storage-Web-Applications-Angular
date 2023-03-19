import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApilistService {

  constructor() {  }
  static_old = '103.99.148.68';
  static = '203.223.190.85';
  apiBase = environment.baseUrl;
  
  
  //Api List
  apiList = {
    'login'                 : this.apiBase+'login',
    'notification'           : this.apiBase+'notification',
    'filters'               : this.apiBase+'filters',
    'delete'                : this.apiBase+'delete',
    'webLogout'             : this.apiBase+'webLogout',

    'addUser'                 : this.apiBase+'addUser',
    'events'                 : this.apiBase+'events',


  }

  
}

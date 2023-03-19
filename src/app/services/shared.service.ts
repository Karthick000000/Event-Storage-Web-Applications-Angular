import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class SharedService {
private subject = new Subject<any>();
sendClickEvent(fn_name:any) {
  this.subject.next(fn_name);
}
getClickEvent(): Observable<any>{ 
  return this.subject.asObservable();
}


// selectedTab(): Observable<any>{ 
//   return this.subject.asObservable();
// }
}
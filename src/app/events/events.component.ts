import { ChangeDetectorRef,AfterViewChecked} from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { ApilistService } from '../services/apilist.service';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { SortEvent } from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';
import { AppComponent } from '../app.component';
import { SessionService } from 'src/app/services/session.service';
import { NgForm } from '@angular/forms';
class EventModel {
  public create_date: string = '';
  public discription : string = '';
  public event_name: string = '';
  public _id:string = '';
}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css',
  '../../static/css/bootstrap.min.css',
  '../../static/css/icons.min.css',
  '../../static/css/app.min.css',
  '../../static/css/design.css']
})
export class EventsComponent implements OnInit {
  clickEventsubscription: Subscription = new Subscription;
  constructor(
    public common: CommonComponent,
    public api:ApilistService,
    private changeDetector : ChangeDetectorRef ,
    private sharedService: SharedService,
    public myapp: AppComponent,
    public session: SessionService
  ) { 

    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe((data) => {
      console.log(data)
      if (data == 'addevent' || 'editevent' || 'deleteevent') {
        this.ngOnInit();
      }

    })
  }
  selectAll: string = "0";
  public_params: any;
  Event_status_list:any[]=[];
  // Event_list:any[]=[];
  // initialFilters:any[]=[];
  modalData:any;
  Event_model:any={};
  event:any[]=[];
  company_associate:any={};
  assigned_to:any;
  company_name_value:any;
  source_list:any=[];
  associate_ids:any=[];
  total_count:any=[];
  subtotal_count:any=[];

  initialFilters: any[] = [];
  filterNames: string[]=[];
  // zero:
  event_list: EventModel[] = [];
  totalRecords: number = 0;
  searchTotalRecords: number =0;
  first: number = 0;
  last: number = 10;
  selectedevent: EventModel[]=[];

  length: any;
  company_add: any = {};
  current_page_number: number = 0;
  searchText: string = '';
  // c
  /// End of Variable declaratio
  search:any;
  event_id:any;
  // length:any;
  items:any[]=[];
  ngOnInit(): void {
    this.common.getRoles();
    this.common.updateEndTime();
    var url = this.api.apiList.events
    this.common.getRequest(url).subscribe(
      (res:any) => {
        this.event_list =[];
          res.Events.forEach( (value: any, key: any) => {
            var event: EventModel = new EventModel();

            console.log(event)
            event._id = value._id;
            event.event_name = value.event_name;
            event.discription = value.discription;
            event.create_date = value.create_date;

            this.event_list.push(event);
            if (value.images && value.images.length) {
              if (!value.default_image) {
              }
            } else {
            }
          });
          if(this.event_list.length<=0){
            this.totalRecords=this.totalRecords;
          }
          this.common.showSpinner = 'false';
        });
  }
  dataView = 'list';
    changeView(type: string) {
    this.dataView = type;
  }
  addevent() {
    var data = {
    }
    this.common.openModal('AddEventComponent', 'xl', data);
  }
  editevent(_id:any) {
    var data = {
      '_id':_id
    }
    console.log(data)
    this.common.openModal('EditEventComponent', 'xl', data);
  }
  deleteevent(_id:any) {
    var data = {
      '_id':_id
    }
        Swal.fire({
      title: 'Are you sure want to Logout?',
      text: '',
      icon: 'warning', 
      showCancelButton: true,
      confirmButtonColor: '#757575',
      cancelButtonColor:'#2296F3',
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'No, continue',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        var url = this.api.apiList.events  + '/' + _id;
        this.common.deleteRequest(url).subscribe(
          (res: any) => {
            if (res.code == 200) {
              this.myapp.toastSuccess(res.msg);
              console.log(res)
              // s  = res.data;
              let redirect='events';
              this.sharedService.sendClickEvent('deleteevent');
              this.myapp.router.navigateByUrl(redirect);
            } else {
              this.myapp.toastError(res.msg);
            }
          })
       }
       else{
        this.common.modalRef.close();
       }
    })
  }
}
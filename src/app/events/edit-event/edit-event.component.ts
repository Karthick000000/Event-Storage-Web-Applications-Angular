import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';
import { ApilistService } from '../../services/apilist.service';
import { AppComponent } from '../../app.component';
import { SessionService } from 'src/app/services/session.service';
import { SharedService } from '../../services/shared.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css',
  // '../../../static/libs/flatpickr/flatpickr.min.css',
  // '../../../static/libs/bootstrap-tagsinput/bootstrap-tagsinput.css',
  // '../../../static/libs/select2/select2.min.css',
  // '../../../static/libs/multiselect/multi-select.css',
  '../../../static/css/bootstrap.min.css',
  '../../../static/css/icons.min.css',
  '../../../static/css/app.min.css',
  // '../../../static/libs/datatables/responsive.bootstrap4.min.css',
  // '../../../static/libs/datatables/buttons.bootstrap4.min.css',
  // '../../../static/libs/datatables/select.bootstrap4.min.css',
  // '../../../static/libs/datatables/dataTables.bootstrap4.min.css',
  // '../../../static/libs/sweetalert2/sweetalert2.min.css',
  '../../../static/css/design.css',]
})
export class EditEventComponent implements OnInit {

  clickEventsubscription: Subscription = new Subscription;
  constructor(
    public common: CommonComponent,
    public api: ApilistService,
    public myapp: AppComponent,
    public session: SessionService,
    private sharedService: SharedService,

  ) { 
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe((data) => {

    })
  } 
  users_list:any=[];
  countries_list:any=[];
  states_list:any=[];
  classcategory_list:any=[];
  academic_year_list:any=[];
  category_list:any=[];
  status_list:any=[];
  group_list:any=[];
  class_list:any=[];
  student_group_list:any=[];
  board_list:any=[];
  reason_list:any=[];
  opportunity_id : any;
  opportunity_stage : any;
  wreason_list:any=[];
  cities_list:any=[];
  source_list:any=[];
  company_category_list:any=[];
  student_class_list:any=[];
  customer_type_list:any=[];
  opportunity_stage_list:any=[];
  event_model:any={};
  modalData:any;
  window_title='Add';
  company_id='';
  rabbit_user:any;
  pricelist:any=[];
  roll_no:any=[];
  event_id:any;
  currencylist:any=[];
  ngOnInit(): void { 
    this.common.getRoles();

    this.modalData=this.common.modalRef.componentInstance.modalData;
    console.log(this.modalData)
    this.event_id=this.modalData._id;

    const url = this.api.apiList.events + '/' + this.event_id;
    this.common.getRequest(url).subscribe(
      (res: any) => {
        if (res.code == 200) {
          console.log(res)
    this.event_model.event_name =res.Event.event_name;
    this.event_model.discription =res.Event.discription;
    
  }
})}
  
editevent(){
      let url = this.api.apiList.events + '/' + this.event_id;
    this.common.putRequest(url, this.event_model).subscribe(
      (res: any) => {
        if (res.code == 200) {
          this.myapp.toastSuccess(res.msg);
          console.log(res)
          // s  = res.data;
          let redirect='events';
          this.common.modalRef.close();
          this.sharedService.sendClickEvent('editevent');
          this.myapp.router.navigateByUrl(redirect);
        } else {
          this.myapp.toastError(res.msg);
        }
      })
    }


}
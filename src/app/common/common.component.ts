import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';
import { SessionService } from '../services/session.service';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';
import { ApilistService } from '../services/apilist.service';
import { DatePipe } from '@angular/common';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  
  constructor(
    public http: HttpClient,
    public modalService: NgbModal,
    public myapp: AppComponent,
    public session : SessionService,
    private sharedService: SharedService,
    public api:ApilistService,
    public datePipe: DatePipe

    ) { 
    
    }
    public quote_company='';
   quote_fields:any={};
   namespace:any={};
   notificationData:any[]=[];
   opts: any;
   scrollEvents: any;
   alpha: any[]=[];
   fromCrmDocsList:any[]=[];
   role_data:any={};
   current_filter:any;
   duplicate_quote:any={};
   addon:any={};
   item_middle_index:any;
   share_model:any={};
   modalsData:any={};
   
  ngOnInit(): void {

    console.log(this.namespace);
    this.quote_fields.packing='none';
    this.quote_fields.discount='none';
    this.quote_fields.tax='overall';
    this.scrollEvents = new EventEmitter<SlimScrollEvent>();
    this.opts = {
      position: "right", // left | right
      barBackground: "red", // #C9C9C9
      barOpacity: "0.8", // 0.8
      barWidth: "10", // 10
      barBorderRadius: "20", // 20
      barMargin: "0", // 0
      gridBackground: "#d9d9d9", // #D9D9D9
      gridOpacity: "1", // 1
      gridWidth: "2", // 2
      gridBorderRadius: "20", // 20
      gridMargin: "0", // 0
      alwaysVisible: true, // true
      visibleTimeout: 1000, // 1000
    }
    
   

  }
  getRoles(){
    var user=this.session.storage.retrieve('user');
    this.role_data=user.role_data;
  }

 converted_date:any;
 email_regex = /\S+@\S+\.\S+/;
 url='';
 opportunity_search:any;
 student_search:any;
 contact_search:any;
 campaign_search:any;
 enquiry_search:any;
 note_search:any;
 company_search:any;
 deal_search:any;
 pricelist_search:any;
 quote_search:any;
 service_quote_search:any;
 user_search:any;
 b2b_search:any;
 ticket_search:any;
 vendor_search:any;
 row_total:any;
 row_curr_total=0;
 showSpinner='false';
 selected_account:any={};
 selected_products:any[]=[];
 selected_campaign:any[]=[];
 selected_companies:any[]=[];
 selected_id:any[]=[];
 max_photo_size=1000000;
 max_logo_size=1000000;
 max_photo_error='1000kb';
 max_logo_error='1000kb';
 max_prd_image_size=1000000;
 max_prd_image_error='1000kb';
 contact_to_quote_id='0';
 company_to_quote_id='0';
 deal_to_quote_id='0';
 quote_item_description='';
 quote_item_description_id='';
 module_settings_tab='1';
 selected_sales_process='';
 selected_sales_sub_process:any[]=[];
 selected_main_process_id='';
 new_sales_process_id='';

 selected_service_process='';
 selected_service_sub_process:any[]=[];
 selected_main_service_process_id='';
 new_service_process_id='';


 deal_process_quote_type='';
 deal_process_quote_id='';
 default_settings:any={};
 custom_start_date:any;
 custom_end_date:any;
 show_custom_range='false';
 new_contact_id:any;
 new_pricelist_id:any;
 new_phone_number:any;
 new_email:any;

 new_company_name:any;
 new_company_id:any;
 summernote_config = {
  placeholder: '',
  tabsize: 2,
  height: '200px',
  // uploadImagePath: '/api/upload',
  toolbar: [
      ['pagebreak',['pagebreak']],
      ['misc', ['undo', 'redo']],
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'picture', 'link', 'hr']],
      ['view', ['fullscreen', 'codeview', 'help']],
  ],
  fontNames: ['Bookman Old Style','Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times New Roman', 'Serif', 'Sans', 'Arial', 'Arial Black', 'Courier', 'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Sacramento'],
  fontNamesIgnoreCheck: ['Bookman Old Style','Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times New Roman', 'Serif', 'Sans', 'Arial', 'Arial Black', 'Courier', 'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Sacramento']
}
  //Get Request with Header
  // user=this.session.storage.retrieve('user');
  // auth_token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDk4MjU0OTYsIm5iZiI6MTYwOTgyNTQ5NiwianRpIjoiODA3ZTE5NmUtNTI1OC00MTA2LWFiNzYtMmZkYmU3MWU2NGJhIiwiZXhwIjoxNjQxMzYxNDk2LCJpZGVudGl0eSI6IjVmZTE3Y2U4YmQzNWE2ODE1OWQ0OGZhMiIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.FLW8lQ6xofclJ8ARHKZwwiavdgX2Nj5-neYAbLWtfkI";
  auth_token:any;
  // auth_token=this.session.user.access_token;
 
  // getRequest(url:any){
  //   var user=this.session.storage.retrieve('user');
  //   this.auth_token=user.access_token;
  //     var reqHeader = new HttpHeaders({ 
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + this.auth_token
  //      });
  //     return this.http.get(url, { headers: reqHeader });
  // }



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

testgetRequest(url:any,bearer:any){
  var user=this.session.storage.retrieve('user');
  this.auth_token=bearer;
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.auth_token
     });
    return this.http.get(url, { headers: new HttpHeaders({ 
      'Authorization': 'Bearer ' + this.auth_token
   }).delete('Content-Type')});
}

getRequest_noaccess(url:any){

    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
     });
    return this.http.get(url, { headers: new HttpHeaders({ 
   }).delete('Content-Type')});

}


getNotification(){
  const url = this.api.apiList.notification;
  console.log(url)
  this.getRequest(url).subscribe(
      (res:any) => {console.log(res);console.log('000000000000000000000000000000000000000000000000000000000000');
        if (res.code == 200) {
          this.notificationData=res.items;
          console.log('1111111111111111111111111111111111111111111111111111111111111111111');
          console.log(this.notificationData);
          console.log('2222222222222222222222222222222222222222222222222222222222222222222');
        }
  })
}

testpostRequest(url:any,params:any,bearer:any){
  var user=this.session.storage.retrieve('user');
  this.auth_token=bearer;
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.auth_token
     });
    return this.http.post(url, params,  { headers: new HttpHeaders({ 
      'Authorization': 'Bearer ' + this.auth_token,
      'Accept':"multipart/form-data"
   })});
}
postRequest(url:any,params:any){

  var user=this.session.storage.retrieve('user');
  this.auth_token=user.access_token;
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.auth_token
     });
    return this.http.post(url, params,  { headers: new HttpHeaders({ 
      'Authorization': 'Bearer ' + this.auth_token
   })});
}

postRequestFiles(url:any,params:any){

  var user=this.session.storage.retrieve('user');
  this.auth_token=user.access_token;
    var reqHeader = new HttpHeaders({ 
        'Authorization': 'Bearer ' + this.auth_token
     });
    return this.http.post(url, params, { headers: new HttpHeaders({ 
      'Authorization': 'Bearer ' + this.auth_token,
      // 'Content-Type': 'multipart/form-data',
      'Accept':"multipart/form-data"
   }).delete('Content-Type')});
}

putRequest(url:any,params:any){

  var user=this.session.storage.retrieve('user');
  this.auth_token=user.access_token;
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.auth_token
     });
    return this.http.put(url, params, { headers: reqHeader });
}

putRequestFile(url:any,params:any){

  var user=this.session.storage.retrieve('user');
  this.auth_token=user.access_token;
    var reqHeader = new HttpHeaders({ 
        // 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.auth_token
     });
    return this.http.put(url, params, { headers: reqHeader });
}

deleteRequest(url:any){

  var user=this.session.storage.retrieve('user');
  this.auth_token=user.access_token;
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.auth_token
     });
    return this.http.delete(url,{ headers: reqHeader });
}

getRequestTable(url:any,headertoken:any){

  var user=this.session.storage.retrieve('user');
  this.auth_token=user.access_token;
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + headertoken
     });
    return this.http.get(url, { headers: reqHeader });
}

select_label='Select';
public modalRef:any;
public modalRefNext:any;
public modalRefThird:any;
right_bar='';

public closeResult: any;
openModal(component:string,size:string,data:any) {

   this.modalRef = this.modalService.open(
   this.myapp.modals[component],
   {
    backdrop : 'static',
    size: size, 
    keyboard : false
   });
   this.modalRef.result.then((result: any) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason: any) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  //  this.modalRef.componentInstance.passEntry.subscribe((res: { data: any; }) => {
  //   console.log(res.data);
  // });
  //  this.modal_title ='test';
  console.log('-----------------------------')
  console.log(data)
  console.log('-----------------------------')

  this.modalRef.componentInstance.modalData=data;
}

openModalNew(component:string,size:string,data:any) {

  this.modalRefNext = this.modalService.open(
  this.myapp.modals[component],
  {
   backdrop : 'static',
   size: size, 
  });
  this.modalRefNext.result.then((result: any) => {
   this.closeResult = `Closed with: ${result}`;
 }, (reason: any) => {
   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
 });
 this.modalRefNext.componentInstance.modalData=data;
}

openModalThird(component:string,size:string,data:any) {

  console.log(data);
  this.modalRefThird = this.modalService.open(
  this.myapp.modals[component],
  {
   backdrop : 'static',
   size: size, 
  });
  this.modalRefThird.result.then((result: any) => {
   this.closeResult = `Closed with: ${result}`;
 }, (reason: any) => {
   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
 });

  this.modalRefThird.componentInstance.modalData=data;
}
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
public filters: any[] = [];
customFilterValues:any[]=[];
openFilter(page:any){
  
  this.current_filter=page;
  let url=this.api.apiList.filters;
  if(page=='contact'){
    url=url+'/contact';
  }else if(page=='company'){
    url=url+'/company';
  }else if(page=='products'){
    url=url+'/product';
  }else if(page=='campaign'){
    url=url+'/campaign';
  }else if(page=='quote'){
    url=url+'/quote';
  }else if(page=='proforma'){
    url=url+'/proforma';
  }else if(page=='deal'){
    url=url+'/deal';
  }else if(page=='invoice'){
    url=url+'/invoice';
  }else if(page=='purchase'){
    url=url+'/purchase';
  }else if(page=='vendors'){
    url=url+'/vendors';
  }else if(page=='ticket'){
    url=url+'/ticket';
  }else if(page=='tickets'){
    url=url+'/tickets';
  }else if(page=='b2b'){
    url=url+'/b2b';
  }else if(page=='pricelist'){
    url=url+'/pricelist';
  }else if(page=='enquiry'){
    url=url+'/enquiry';
  }else if(page=='note'){
    url=url+'/note';
  }else if(page=='task'){
    url=url+'/task';
  }else if(page=='student'){
    url=url+'/student';
  }else if(page=='fee-template'){
    url=url+'/fee-template';
  }
  
  this.right_bar='right-bar-enabled';
  this.getRequest(url).subscribe(
    (res:any) => {
      if (res.code == 200) {
      this.filters=res.data;
      
   
    
      for (let key in this.filters) {
      
        this.customFilterValues[key]='';
      }
      console.log(this.filters);
      }
    })
}
getFilterURL(page:any){
  let params='';
  let url=this.api.apiList.filters;
  if(page=='contact'){
    url=url+'/contact';
  }else if(page=='b2b'){
    url=url+'/b2b';
  }else if(page=='company'){
    url=url+'/company';
  }else if(page=='vendors'){
    url=url+'/vendors';
  }else if(page=='products'){
    url=url+'/product';
  }else if(page=='campaign'){
    url=url+'/campaign';
  }else if(page=='enquiry'){
    url=url+'/enquiry';
  }else if(page=='opportunity'){
    url=url+'/opportunity';
  }else if(page=='note'){
    url=url+'/note';
  }else if(page=='task'){
    url=url+'/task';
  }else if(page=='student'){
    url=url+'/student';
  }else if(page=='fee-template'){
    url=url+'/fee-template';
  }else if(page=='admission_fee'){
    url=url+'/admission_fee';
  }
  return url;
}

initialFilters:any[]=[];
getFilters(page:any){
  let params='';
  let url=this.api.apiList.filters;
  if(page=='contact'){
    url=url+'/contact';
  }else if(page=='b2b'){
    url=url+'/b2b';
  }else if(page=='company'){
    url=url+'/company';
  }else if(page=='vendors'){
    url=url+'/vendors';
  }else if(page=='products'){
    url=url+'/product';
  }else if(page=='campaign'){
    url=url+'/campaign';
  }else if(page=='enquiry'){
    url=url+'/enquiry';
  }else if(page=='note'){
    url=url+'/note';
  }else if(page=='task'){
    url=url+'/task';
  }else if(page=='student'){
    url=url+'/student';
  }else if(page=='fee-template'){
    url=url+'/fee-template';
  }else if(page=='fee-template'){
    url=url+'/fee-template';
  }     // this.right_bar='right-bar-enabled';
  this.getRequest(url).subscribe(
    (res:any) => {
      if (res.code == 200) {
      this.filters=res.data;
      for (let key in res.data) {
        let value = '';
        this.initialFilters[key]=value;
        params+=',&"'+key+'":'+'"'+value+'"'
      }
      }
    })

    return this.initialFilters;
}

closeFilter(){
  this.right_bar='';
}


updateEndTime(){
  var url=this.api.apiList.webLogout;
  this.getRequest(url).subscribe(
    (res:any) => {
      if (res.code == 200) {

      }
    })
}

customFilter(column:any,value:any){
  if(column === 'all' && value==="all"){
   this.customFilterValues=[];
   this.sharedService.sendClickEvent('customFilter');
  }
   else if(column!='date'){
     this.customFilterValues[column]=value;
     this.sharedService.sendClickEvent('customFilter');
   }else if(column=='date'){
     this.show_custom_range='false';
     this.customFilterValues['date_from']='';
     this.customFilterValues['date_to']='';
     var today=new Date();
     var date_from:any;
     var date_to:any;
     console.log(value);
     if(value=='all'){
       date_from = '';
       date_to = '';
       this.customFilterValues['date_from']='';
       this.customFilterValues['date_to']='';
       this.sharedService.sendClickEvent('customFilter');
     }else if(value=='today'){
       date_from = today;
       date_to = today;
       date_from=this.convertDateString(date_from);
       date_to=this.convertDateString(date_to);
       this.customFilterValues['date_from']=date_from;
       this.customFilterValues['date_to']=date_to;
       this.sharedService.sendClickEvent('customFilter');
     }else if(value=='yesterday'){
       var yesterday = new Date();
       yesterday.setDate(yesterday.getDate() - 1);
       date_from = yesterday;
       date_to = yesterday;
       date_from=this.convertDateString(date_from);
       date_to=this.convertDateString(date_to);
       this.customFilterValues['date_from']=date_from;
       this.customFilterValues['date_to']=date_to;
       this.sharedService.sendClickEvent('customFilter');
     }else if(value=='last_seven_days'){
       var dt=new Date();
       dt.setDate(dt.getDate() - 6);
       date_from = dt;
       date_to = today;
       date_from=this.convertDateString(date_from);
       date_to=this.convertDateString(date_to);
       this.customFilterValues['date_from']=date_from;
       this.customFilterValues['date_to']=date_to;
       this.sharedService.sendClickEvent('customFilter');
     }else if(value=='last_thirty_days'){
       var dt=new Date();
       dt.setDate(dt.getDate() - 30);
       date_from = dt;
       date_to = today;
       date_from=this.convertDateString(date_from);
       date_to=this.convertDateString(date_to);
       this.customFilterValues['date_from']=date_from;
       this.customFilterValues['date_to']=date_to;
       this.sharedService.sendClickEvent('customFilter');
     }else if(value=='this_month'){
       var dt = new Date();
       var firstMday = new Date(dt.getFullYear(), dt.getMonth(), 1);
       var lastMday = new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
       date_from = firstMday;
       date_to = lastMday;
       date_from=this.convertDateString(date_from);
       date_to=this.convertDateString(date_to);
       this.customFilterValues['date_from']=date_from;
       this.customFilterValues['date_to']=date_to;
       this.sharedService.sendClickEvent('customFilter');
     }else if(value=='last_month'){
       var dt = new Date();
       var firstMday = new Date(dt.getFullYear(), dt.getMonth()-1, 1);
       var lastMday = new Date(dt.getFullYear(), dt.getMonth(), 0);
       date_from = firstMday;
       date_to = lastMday;
       date_from=this.convertDateString(date_from);
       date_to=this.convertDateString(date_to);
       this.customFilterValues['date_from']=date_from;
       this.customFilterValues['date_to']=date_to;
       this.sharedService.sendClickEvent('customFilter');
     }else if(value=='custom_range'){
       this.show_custom_range='true';
     }
   }
  
 }

customDateFilter(start:any,end:any){
    var date_from:any;
    var date_to:any;
    date_from=start.value.replaceAll("-","/");
    date_to=end.value.replaceAll("-","/");
    this.customFilterValues['date_from']=date_from;
    this.customFilterValues['date_to']=date_to;
    this.sharedService.sendClickEvent('customFilter');
}



getRandomColor() {
  var color = Math.floor(0x1000000 * Math.random()).toString(16);
  return '#' + ('000000' + color).slice(-6);
}

priceOnly(event:any): boolean {
  var charCode = (event.which) ? event.which : event.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
}

lettersSpace(event:any){
  var regex = new RegExp("^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$");
  var value=event.target.value;
  if (regex.test(value)) {
      return true;
  }else{
    return false;
  }
}





goToUrl(url:any){
  url='http://'+url;
  window.open(url, "_blank");
}
goToUrlPDF(url:any){
  window.open(url, "_blank");
}

delete(id:any,associate_to:any){
  console.log(id);
  Swal.fire({
    title: 'Are you sure want to delete?',
    text: '',
    icon: 'warning', 
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
    let url=this.api.apiList.delete+'?associate_id='+id+'&associate_to='+associate_to;
  this.getRequest(url).subscribe(
    (res:any) => {
      if(res.code==200){
        this.myapp.toastSuccess(res.msg);
        if(associate_to=='company'){
          this.sharedService.sendClickEvent('delete_company');
        }else if(associate_to=='product'){
          this.sharedService.sendClickEvent('delete_product');
        }else if(associate_to=='quote'){
          this.sharedService.sendClickEvent('delete_quote');
        }else if(associate_to=='proforma'){
          this.sharedService.sendClickEvent('delete_proforma');
        }else if(associate_to=='invoice'){
          this.sharedService.sendClickEvent('delete_invoice');
        }else if(associate_to=='purchase'){
          this.sharedService.sendClickEvent('delete_purchase');
        }else if(associate_to=='vendor'){
          this.sharedService.sendClickEvent('delete_vendor');
        }else if(associate_to=='deal'){
          this.sharedService.sendClickEvent('delete_deal');
        }else if(associate_to=='ticket'){
          this.sharedService.sendClickEvent('delete_ticket');
        }else if(associate_to=='custom_fields'){
          this.sharedService.sendClickEvent('delete_custom_field');
        }else if(associate_to=='pricelist'){
          this.sharedService.sendClickEvent('delete_pricelist');
        }else if(associate_to=='campaign'){
          this.sharedService.sendClickEvent('delete_campaign');
        }else if(associate_to=='enquiry'){
          this.sharedService.sendClickEvent('delete_enquiry');
        }else if(associate_to=='opportunity'){
          this.sharedService.sendClickEvent('delete_opportunity');
        }else if(associate_to=='student'){
          this.sharedService.sendClickEvent('delete_student');
        }else if(associate_to=='feetype'){
          this.sharedService.sendClickEvent('delete_feetype');
        }else if(associate_to=='transport_fee'){
          this.sharedService.sendClickEvent('delete_transport_fee');
        }else if(associate_to=='security_deposit'){
          this.sharedService.sendClickEvent('delete_security_deposit_fee');
        }else if(associate_to=='miscellaneous'){
          this.sharedService.sendClickEvent('delete_miscellaneous_fee');
        }else if(associate_to=='food_fee'){
          this.sharedService.sendClickEvent('delete_food_fee');
        }else if(associate_to=='school_kit_fee'){
          this.sharedService.sendClickEvent('delete_school_kit_fee');
        }else if(associate_to=='late_fee'){
          this.sharedService.sendClickEvent('delete_late_fee');
        }else if(associate_to=='tution_fee'){
          this.sharedService.sendClickEvent('delete_tution_fee');
        }else if(associate_to=='admission_fee'){
          this.sharedService.sendClickEvent('delete_admission_fee');
        }else{
          this.sharedService.sendClickEvent('delete');
        }
       
      }else{
        this.myapp.toastError(res.msg);
      }
    })

  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'Not Deleted:)',
      'error'
    )
  }
})
}

shareWith=(id:any,associate_to:any,old_assigned_name:any,share_with:any) =>{
  let data={
    'associate_id':id,
    'associate_to':associate_to,
    'old_assigned_name':old_assigned_name ,
    'share_with':share_with
  }
  this.share_model.share_with = share_with
  console.log(data)
  // if(associate_to=='deal')
  // {
  //   const url = this.api.apiList.deals + '/' + id;
  //   this.getRequest(url).subscribe(
  //     (res: any) => {
  //       if (res.code == 200) {
  //         let deal = res.data;
  //         this.share_model.share_with = deal.share_with
  //         console.log(this.share_model.share_with)
  //       }
  //     })
  // }
  

  this.openModal('ShareWithComponent', 'xl', data);
}



reassign(id:any,associate_to:any){
  console.log(id);
  Swal.fire({
    title: 'Are you sure want to reassign?',
    text: '',
    icon: 'warning', 
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {


  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'Not Reassigned:)',
      'error'
    )
  }
})
}
convertDateFormatDtPicker(date_string:any){

         let dt_array=date_string.split('-');
         let d=dt_array[0];
         let m=dt_array[1];
         let y=dt_array[2];
         var converted_date=m+'/'+d+'/'+y;
         return converted_date;

}

currencyFormater(amount:any){
  amount=Number(amount)
  let converted_amt='';
   if(amount > 999 && amount < 99999){
    converted_amt=(Math.abs(amount)/1000).toFixed(2) + 'K';
   }else if(amount > 99999 && amount < 999999){
    converted_amt=(Math.abs(amount)/10000).toFixed(2) + 'L';
   }else if(amount > 999999 && amount < 9999999){
    converted_amt=(Math.abs(amount)/100000).toFixed(2) + 'C';
   }else if(amount > 9999999){
    converted_amt=(Math.abs(amount)/1000000).toFixed(2) + 'M';
   }else {
    converted_amt=amount
   }
  return converted_amt;
}
convertDateString(d:any)
 {
  let date_string = new Date(d)
  var dd:any;
  dd = date_string.getDate(); 
  var mm:any;
  mm = date_string.getMonth()+1;
  var yyyy = date_string.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  if(mm<10){mm='0'+mm};
  return d = dd+'/'+mm+'/'+yyyy
}
convertDateString2(d:any)
 {
  let date_string = new Date(d)
  var dd:any;
  dd = date_string.getDate(); 
  var mm:any;
  mm = date_string.getMonth()+1;
  var yyyy = date_string.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  if(mm<10){mm='0'+mm};
  return d = dd+'-'+mm+'-'+yyyy
}

importData(module:any){
  var data = {
    'module':module
  }
  this.openModal('ImportComponent','xl',data)
}



}

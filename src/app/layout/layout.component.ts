import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonComponent } from '../common/common.component';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs'
import { ApilistService } from '../services/apilist.service';
import Swal from 'sweetalert2';
import { NotifierService } from 'angular-notifier';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router'
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css',
  '../../static/libs/flatpickr/flatpickr.min.css',
  '../../static/css/bootstrap.min.css',
  '../../static/css/icons.min.css',
  '../../static/css/app.min.css',
  '../../static/css/design.css',
]
})
export class LayoutComponent implements OnInit { 
  private readonly notifier: NotifierService;
  
  // private readonly notifierOptions: NotifierOptions;
  elem: any;
  clickEventsubscription: Subscription = new Subscription;
  constructor( 
    
    @Inject(DOCUMENT) private document: any,
    public myapp: AppComponent, 
    public session:SessionService,
    public common:CommonComponent,
    private router: Router,
    private sharedService: SharedService,
    public api:ApilistService,
    notifierService: NotifierService,
    private sanitizer: DomSanitizer,
    public ActivatedRoute:ActivatedRoute

    ) { 
      this.clickEventsubscription = this.sharedService.getClickEvent().subscribe((data) => {

      })
    }


    

  layout_model:any={};
  account_search:any={};
  today_followup:any={};
  notification_count=0;
  notificationsData: any[] = [];
  organization_info:any={};
  status_filter='active';
  quote_category_filter='';
  product_add:any={};
  quote_filter:any;
  // role_data:any={};
  demo_data:any;
  profile_pic='assets/static/images/user.png';
  
  ngOnInit(): void {
    this.elem = document.documentElement;
    this.demo_data='false';
    this.quote_filter="all";
    this.product_add.fromScreen='product';
    this.common.getRoles();
    this.common.updateEndTime();
    var user=this.session.storage.retrieve('user');
    
      
    console.log(this.notificationsData)
    this.account_search.from_screen='quote';
    this.status_filter='all';
    this.status_filter='active';
  }
  openFullscreenCss:any;
  closeFullscreenCss='hide';
  
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
    this.openFullscreenCss='hide';
    this.closeFullscreenCss='';
  }
  
/* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
    this.openFullscreenCss='';
    this.closeFullscreenCss='hide';
  }

  public isCollapsed = true;
  public collapse_class='left-side-menu-condensed';  
  collapse(){
    if(this.isCollapsed==true){
      this.collapse_class='sidebar-enable';
      this.isCollapsed=false;
    }else if(this.isCollapsed==false){
      this.collapse_class='left-side-menu-condensed';
      this.isCollapsed=true;
    }
  } 
  logout(){
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
        console.log(result.value)
        let redirect='login';
        this.myapp.router.navigateByUrl(redirect);      }
    })
  }
}

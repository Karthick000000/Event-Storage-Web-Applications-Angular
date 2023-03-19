import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
// import { NavigationComponent } from './navigation/navigation.component';
import { SidebarModule } from 'ng-sidebar';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HttpClientModule } from '@angular/common/http';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { AuthGuard } from './guards/auth.guard'; 
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSummernoteModule } from 'ngx-summernote';
import { IconsModule } from './icons/icons.module';
import { ModalModule } from './modal';
import { ModelwindowComponent } from './modelwindow/modelwindow.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonComponent } from './common/common.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ColorPickerModule } from 'ngx-color-picker';
import { SettingsBackComponent } from './common/settings-back/settings-back.component';
import { CountdownModule } from 'ngx-countdown';
import { NgbDatepicker, NgbDatepickerNavigateEvent} from '@ng-bootstrap/ng-bootstrap';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TreeModule } from '@circlon/angular-tree-component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppSettingsComponent } from './common/app-settings/app-settings.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerShowComponent } from './spinner-show/spinner-show.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PdfViewerModule }  from  'ng2-pdf-viewer';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatYearView } from '@angular/material/datepicker';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HighchartsChartModule } from 'highcharts-angular';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { PercentageDirective } from './percentage.directive';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';



const customNotifierOptions: NotifierOptions = {
  theme: 'material',
  position: {
    vertical: {
      position: 'top',
    }
  }
  
};

// import { NgSelect2Module } from 'ng-select2';
@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    MainComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    LayoutComponent, 
    ModelwindowComponent,
    CommonComponent,
    SettingsBackComponent,
    AppSettingsComponent,
    SpinnerComponent,
    SpinnerShowComponent,
    PercentageDirective,
    EventsComponent,
    AddEventComponent,
    EditEventComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgbModule,
    NgxSummernoteModule,
    IconsModule,
    ModalModule,
    NgbNavModule,
    DragDropModule,
    ColorPickerModule,
    CountdownModule,
    AutocompleteLibModule,
    TreeModule,
    NgSelectModule,
    NgxMatTimepickerModule,
    // NgSelect2Module
    // FlatpickrModule,
    IvyCarouselModule,
    NgSlimScrollModule,
    HighchartsChartModule,
    NgCircleProgressModule.forRoot({
      // "backgroundGradient": true,
      // "backgroundColor": "#ffffff",
      // "backgroundGradientStopColor": "#c0c0c0",
      // "backgroundPadding": -10,
      // "radius": 60,
      // "maxPercent": 100,
      // "outerStrokeWidth": 10,
      // "outerStrokeColor": "#61A9DC",
      // "innerStrokeWidth": 0,
      // "subtitleColor": "#444444",
      // "showInnerStroke": false,
      // "startFromZero": false
    }),
    PdfViewerModule,
    NotifierModule.withConfig(customNotifierOptions),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    TableModule,
    ButtonModule,
    PaginatorModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule
  ],
  
  exports:[DragDropModule],
  // providers: [NgbTabset], 
  bootstrap: [AppComponent],
  providers: [
    CommonComponent,
    AppComponent,
    DatePipe,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: SLIMSCROLL_DEFAULTS,
      useValue: {
        alwaysVisible: false,
        gridOpacity: '0.2', barOpacity: '0.5',
        gridBackground: '#fff',
        gridWidth: '6',
        gridMargin: '2px 2px',
        barBackground: '#fff',
        barWidth: '20',
        barMargin: '2px 2px'
      }
    },
    NgCircleProgressModule,
    [
      {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  
      {provide: MAT_DATE_FORMATS, useValue: AppComponent.DateFormat},
    ],
  ]
})
export class AppModule { 
    
}

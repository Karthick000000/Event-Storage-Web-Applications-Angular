import { Component, OnInit ,ViewChild } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-modelwindow',
  templateUrl: './modelwindow.component.html',
  styleUrls: ['./modelwindow.component.css',
  // '../../static/libs/flatpickr/flatpickr.min.css',
  // '../../static/libs/bootstrap-tagsinput/bootstrap-tagsinput.css',
  // '../../static/libs/select2/select2.min.css',
  // '../../static/libs/multiselect/multi-select.css',
  '../../static/css/bootstrap.min.css',
  '../../static/css/icons.min.css',
  '../../static/css/app.min.css',
  // '../../static/libs/datatables/responsive.bootstrap4.min.css',
  // '../../static/libs/datatables/buttons.bootstrap4.min.css',
  // '../../static/libs/datatables/select.bootstrap4.min.css',
  // '../../static/libs/datatables/dataTables.bootstrap4.min.css',
  '../../static/libs/sweetalert2/sweetalert2.min.css',
  '../../static/css/design.css',]
})
export class ModelwindowComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    public myapp: AppComponent
  ) { }

  ngOnInit(): void {
  }

}

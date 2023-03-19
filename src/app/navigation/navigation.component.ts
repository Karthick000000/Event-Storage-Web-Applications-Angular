import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css',
  '../../static/libs/flatpickr/flatpickr.min.css',
  '../../static/libs/bootstrap-tagsinput/bootstrap-tagsinput.css',
  '../../static/libs/select2/select2.min.css',
  '../../static/libs/multiselect/multi-select.css',
  '../../static/css/bootstrap.min.css',
  '../../static/css/icons.min.css',
  '../../static/css/app.min.css',
  // '../../static/libs/datatables/responsive.bootstrap4.min.css',
  // '../../static/libs/datatables/buttons.bootstrap4.min.css',
  // '../../static/libs/datatables/select.bootstrap4.min.css',
  // '../../static/libs/datatables/dataTables.bootstrap4.min.css',
  // '../../static/libs/sweetalert2/sweetalert2.min.css',
  '../../static/css/design.css',   ]
})
export class NavigationComponent {

  constructor() { }

  ngOnInit(): void {
  }
   _dock: boolean = true;
  _opened: boolean = false;
 
  _toggleSidebar() {
    this._opened = !this._opened;
  }

}

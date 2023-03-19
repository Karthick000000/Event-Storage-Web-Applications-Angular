import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';
@Component({
  selector: 'app-settings-back',
  templateUrl: './settings-back.component.html',
  styleUrls: ['./settings-back.component.css',
  '../../../static/libs/flatpickr/flatpickr.min.css',
  '../../../static/libs/bootstrap-tagsinput/bootstrap-tagsinput.css',
  '../../../static/css/bootstrap.min.css',
  '../../../static/css/icons.min.css',
  '../../../static/css/app.min.css',
  '../../../static/css/design.css',]
})
export class SettingsBackComponent implements OnInit {

  constructor(
    public common: CommonComponent
  ) { }

  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { SpinnerComponent} from '../spinner/spinner.component';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-spinner-show',
  templateUrl: './spinner-show.component.html',
  styleUrls: ['./spinner-show.component.css']
})
export class SpinnerShowComponent implements OnInit {

  constructor(
    public common:CommonComponent
  ) { }

  ngOnInit(): void {

  }

}

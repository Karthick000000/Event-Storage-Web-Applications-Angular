import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';



@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  // constructor(
  //   public ThemePalette:ThemePalette,
  //   public ProgressSpinnerMode:ProgressSpinnerMode
  // ) { }

  // ngOnInit(): void {
  //   color: ThemePalette = 'primary';
  //   mode: ProgressSpinnerMode = 'determinate';
  //   value = 50;
  // }
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

}

import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPercentageDirective]'
})
export class PercentageDirective {
  // Allow decimal numbers and negative values
  private regex: RegExp = new RegExp(/^\d{0,2}\.?\d{0,2}$/g);
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    //"-",
    'ArrowLeft',
    'ArrowRight',
    'Del',
    'Delete'
  ];

  constructor(private el: ElementRef, private control: NgControl) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    console.log('even', event.key);
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;

    // this.ngControl.valueAccessor.writeValue(newVal + ' %');

    // let current: string = this.control.control?.value;
    const position = this.el.nativeElement.selectionStart;
    console.log('position', position);
    let next: string = [
      current.slice(0, position),
      event.key == 'Decimal' ? '.' : event.key,
      current.slice(position)
    ].join('');
    debugger;
    // current = current + '523';

    const beforeDecimal: any = next.split('.')[0];
    const AfterDecimal: any = next.split('.')[1];
    const checkDotFirstPosition: string = next.substring(0, 1);
    current = current + ' %';
    if (
      next === '00' ||
      next === '01' ||
      next === '02' ||
      next === '03' ||
      next === '04' ||
      next === '05' ||
      next === '06' ||
      next === '07' ||
      next === '08' ||
      next === '09'
    ) {
      event.preventDefault();
    }

    if (checkDotFirstPosition === '.') {
      event.preventDefault();
    }
    if (beforeDecimal) {
      if (beforeDecimal <= 100) {
        if (beforeDecimal.toString().length >= 4) {
          event.preventDefault();
        }
      } else {
        if (beforeDecimal.toString().length >= 3) {
          event.preventDefault();
        }
      }
    }
    if (AfterDecimal) {
      if (AfterDecimal.toString().length >= 2) {
        event.preventDefault();
      }
    }
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerShowComponent } from './spinner-show.component';

describe('SpinnerShowComponent', () => {
  let component: SpinnerShowComponent;
  let fixture: ComponentFixture<SpinnerShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

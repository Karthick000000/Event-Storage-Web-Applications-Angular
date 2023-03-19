import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelwindowComponent } from './modelwindow.component';

describe('ModelwindowComponent', () => {
  let component: ModelwindowComponent;
  let fixture: ComponentFixture<ModelwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelwindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

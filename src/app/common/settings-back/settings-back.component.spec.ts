import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBackComponent } from './settings-back.component';

describe('SettingsBackComponent', () => {
  let component: SettingsBackComponent;
  let fixture: ComponentFixture<SettingsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

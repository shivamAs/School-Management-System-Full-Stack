import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStaffComponent } from './view-staff.component';

describe('ViewStaffComponent', () => {
  let component: ViewStaffComponent;
  let fixture: ComponentFixture<ViewStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

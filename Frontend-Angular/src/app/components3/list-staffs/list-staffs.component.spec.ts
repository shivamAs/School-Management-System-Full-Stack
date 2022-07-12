import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStaffsComponent } from './list-staffs.component';

describe('ListStaffsComponent', () => {
  let component: ListStaffsComponent;
  let fixture: ComponentFixture<ListStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStaffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

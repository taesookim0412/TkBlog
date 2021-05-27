import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincontactoneComponent } from './admincontactone.component';

describe('AdmincontactoneComponent', () => {
  let component: AdmincontactoneComponent;
  let fixture: ComponentFixture<AdmincontactoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincontactoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincontactoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

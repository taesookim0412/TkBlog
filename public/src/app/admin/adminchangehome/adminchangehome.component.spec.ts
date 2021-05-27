import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchangehomeComponent } from './adminchangehome.component';

describe('AdminchangehomeComponent', () => {
  let component: AdminchangehomeComponent;
  let fixture: ComponentFixture<AdminchangehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminchangehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchangehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindirectoryComponent } from './admindirectory.component';

describe('AdmindirectoryComponent', () => {
  let component: AdmindirectoryComponent;
  let fixture: ComponentFixture<AdmindirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

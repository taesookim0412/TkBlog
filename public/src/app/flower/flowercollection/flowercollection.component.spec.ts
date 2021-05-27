import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowercollectionComponent } from './flowercollection.component';

describe('FlowercollectionComponent', () => {
  let component: FlowercollectionComponent;
  let fixture: ComponentFixture<FlowercollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowercollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowercollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

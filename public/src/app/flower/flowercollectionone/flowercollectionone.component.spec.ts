import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowercollectiononeComponent } from './flowercollectionone.component';

describe('FlowercollectiononeComponent', () => {
  let component: FlowercollectiononeComponent;
  let fixture: ComponentFixture<FlowercollectiononeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowercollectiononeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowercollectiononeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

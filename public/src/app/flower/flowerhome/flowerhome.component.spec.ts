import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerhomeComponent } from './flowerhome.component';

describe('FlowerhomeComponent', () => {
  let component: FlowerhomeComponent;
  let fixture: ComponentFixture<FlowerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

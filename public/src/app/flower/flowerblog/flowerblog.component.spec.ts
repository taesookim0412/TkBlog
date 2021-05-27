import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerblogComponent } from './flowerblog.component';

describe('FlowerblogComponent', () => {
  let component: FlowerblogComponent;
  let fixture: ComponentFixture<FlowerblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

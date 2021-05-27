import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowergalleryComponent } from './flowergallery.component';

describe('FlowergalleryComponent', () => {
  let component: FlowergalleryComponent;
  let fixture: ComponentFixture<FlowergalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowergalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowergalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

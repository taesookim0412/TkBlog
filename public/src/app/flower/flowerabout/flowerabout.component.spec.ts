import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloweraboutComponent } from './flowerabout.component';

describe('FloweraboutComponent', () => {
  let component: FloweraboutComponent;
  let fixture: ComponentFixture<FloweraboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloweraboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloweraboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

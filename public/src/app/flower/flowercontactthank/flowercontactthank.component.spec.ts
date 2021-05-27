import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowercontactthankComponent } from './flowercontactthank.component';

describe('FlowercontactthankComponent', () => {
  let component: FlowercontactthankComponent;
  let fixture: ComponentFixture<FlowercontactthankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowercontactthankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowercontactthankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

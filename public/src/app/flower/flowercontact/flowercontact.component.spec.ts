import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowercontactComponent } from './flowercontact.component';

describe('FlowercontactComponent', () => {
  let component: FlowercontactComponent;
  let fixture: ComponentFixture<FlowercontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowercontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

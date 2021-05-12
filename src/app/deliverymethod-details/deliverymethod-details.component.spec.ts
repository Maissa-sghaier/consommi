import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymethodDetailsComponent } from './deliverymethod-details.component';

describe('DeliverymethodDetailsComponent', () => {
  let component: DeliverymethodDetailsComponent;
  let fixture: ComponentFixture<DeliverymethodDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymethodDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymethodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

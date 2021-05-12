import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymethodComponent } from './deliverymethod.component';

describe('DeliverymethodComponent', () => {
  let component: DeliverymethodComponent;
  let fixture: ComponentFixture<DeliverymethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeliverymethodComponent } from './create-deliverymethod.component';

describe('CreateDeliverymethodComponent', () => {
  let component: CreateDeliverymethodComponent;
  let fixture: ComponentFixture<CreateDeliverymethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDeliverymethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDeliverymethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

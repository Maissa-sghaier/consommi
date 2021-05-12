import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeliverymethodComponent } from './update-deliverymethod.component';

describe('UpdateDeliverymethodComponent', () => {
  let component: UpdateDeliverymethodComponent;
  let fixture: ComponentFixture<UpdateDeliverymethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeliverymethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeliverymethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

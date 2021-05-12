import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymethodListComponent } from './deliverymethod-list.component';

describe('DeliverymethodListComponent', () => {
  let component: DeliverymethodListComponent;
  let fixture: ComponentFixture<DeliverymethodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymethodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymethodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

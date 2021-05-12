import { TestBed } from '@angular/core/testing';

import { DeliverymethodService } from './deliverymethod.service';

describe('DeliverymethodService', () => {
  let service: DeliverymethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverymethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

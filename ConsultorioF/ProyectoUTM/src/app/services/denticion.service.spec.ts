import { TestBed } from '@angular/core/testing';

import { DenticionService } from './denticion.service';

describe('DenticionService', () => {
  let service: DenticionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DenticionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

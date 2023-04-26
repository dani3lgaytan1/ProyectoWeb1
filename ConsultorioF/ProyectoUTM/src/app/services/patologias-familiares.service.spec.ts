import { TestBed } from '@angular/core/testing';

import { PatologiasFamiliaresService } from './patologias-familiares.service';

describe('PatologiasFamiliaresService', () => {
  let service: PatologiasFamiliaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatologiasFamiliaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

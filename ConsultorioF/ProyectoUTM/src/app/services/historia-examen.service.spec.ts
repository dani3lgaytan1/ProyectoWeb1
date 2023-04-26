import { TestBed } from '@angular/core/testing';

import { HistoriaExamenService } from './historia-examen.service';

describe('HistoriaExamenService', () => {
  let service: HistoriaExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

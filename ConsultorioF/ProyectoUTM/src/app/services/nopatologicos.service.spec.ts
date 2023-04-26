import { TestBed } from '@angular/core/testing';

import { NopatologicosService } from './nopatologicos.service';

describe('NopatologicosService', () => {
  let service: NopatologicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NopatologicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

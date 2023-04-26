import { TestBed } from '@angular/core/testing';

import { FormafacialService } from './formafacial.service';

describe('FormafacialService', () => {
  let service: FormafacialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormafacialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

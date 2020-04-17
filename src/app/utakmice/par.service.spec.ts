import { TestBed } from '@angular/core/testing';

import { ParService } from './par.service';

describe('ParService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParService = TestBed.get(ParService);
    expect(service).toBeTruthy();
  });
});

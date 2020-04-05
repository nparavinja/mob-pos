import { TestBed } from '@angular/core/testing';

import { UtakmiceService } from './utakmice.service';

describe('UtakmiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtakmiceService = TestBed.get(UtakmiceService);
    expect(service).toBeTruthy();
  });
});

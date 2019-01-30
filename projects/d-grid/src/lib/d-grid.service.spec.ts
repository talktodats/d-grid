import { TestBed } from '@angular/core/testing';

import { DGridService } from './d-grid.service';

describe('DGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DGridService = TestBed.get(DGridService);
    expect(service).toBeTruthy();
  });
});

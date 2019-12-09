import { TestBed } from '@angular/core/testing';

import { EnterStateService } from './enter-state.service';

describe('EnterStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnterStateService = TestBed.get(EnterStateService);
    expect(service).toBeTruthy();
  });
});

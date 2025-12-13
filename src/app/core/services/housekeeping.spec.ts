import { TestBed } from '@angular/core/testing';

import { Housekeeping } from './housekeeping';

describe('Housekeeping', () => {
  let service: Housekeeping;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Housekeeping);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

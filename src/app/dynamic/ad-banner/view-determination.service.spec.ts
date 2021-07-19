import { TestBed } from '@angular/core/testing';

import { ViewDeterminationService } from './view-determination.service';

describe('ViewDeterminationService', () => {
  let service: ViewDeterminationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDeterminationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

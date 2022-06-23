import { TestBed } from '@angular/core/testing';

import { InMemoryDbServiceService } from './in-memory-db-service.service';

describe('InMemoryDbServiceService', () => {
  let service: InMemoryDbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

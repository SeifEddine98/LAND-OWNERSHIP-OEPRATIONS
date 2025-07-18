import { TestBed } from '@angular/core/testing';

import { ReclamationserviceService } from './reclamationservice.service';

describe('ReclamationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReclamationserviceService = TestBed.get(ReclamationserviceService);
    expect(service).toBeTruthy();
  });
});

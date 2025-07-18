import { TestBed } from '@angular/core/testing';

import { ExtraitserviceService } from './extraitservice.service';

describe('ExtraitserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtraitserviceService = TestBed.get(ExtraitserviceService);
    expect(service).toBeTruthy();
  });
});

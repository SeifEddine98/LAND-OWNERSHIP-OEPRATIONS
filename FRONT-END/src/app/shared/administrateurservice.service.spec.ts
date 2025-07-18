import { TestBed } from '@angular/core/testing';

import { AdministrateurserviceService } from './administrateurservice.service';

describe('AdministrateurserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministrateurserviceService = TestBed.get(AdministrateurserviceService);
    expect(service).toBeTruthy();
  });
});

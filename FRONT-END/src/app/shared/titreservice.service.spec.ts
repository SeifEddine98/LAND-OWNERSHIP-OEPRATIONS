import { TestBed } from '@angular/core/testing';

import { TitreserviceService } from './titreservice.service';

describe('TitreserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitreserviceService = TestBed.get(TitreserviceService);
    expect(service).toBeTruthy();
  });
});

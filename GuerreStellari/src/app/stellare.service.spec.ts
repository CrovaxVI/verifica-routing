import { TestBed } from '@angular/core/testing';

import { StellareService } from './stellare.service';

describe('StellareService', () => {
  let service: StellareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StellareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

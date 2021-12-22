import { TestBed } from '@angular/core/testing';

import { AdvantageService } from './advantage.service';

describe('AdvantageService', () => {
  let service: AdvantageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvantageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

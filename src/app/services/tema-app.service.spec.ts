import { TestBed } from '@angular/core/testing';

import { TemaAppService } from './tema-app.service';

describe('TemaAppService', () => {
  let service: TemaAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemaAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

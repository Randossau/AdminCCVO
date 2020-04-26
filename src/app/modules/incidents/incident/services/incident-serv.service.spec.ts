import { TestBed } from '@angular/core/testing';

import { IncidentServService } from './incident-serv.service';

describe('IncidentServService', () => {
  let service: IncidentServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

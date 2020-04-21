import { TestBed } from '@angular/core/testing';

import { ParcoursServService } from './parcours-serv.service';

describe('ParcoursServService', () => {
  let service: ParcoursServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcoursServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

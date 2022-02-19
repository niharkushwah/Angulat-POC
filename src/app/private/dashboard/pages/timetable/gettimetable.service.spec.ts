import { TestBed } from '@angular/core/testing';

import { GettimetableService } from './gettimetable.service';

describe('GettimetableService', () => {
  let service: GettimetableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettimetableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

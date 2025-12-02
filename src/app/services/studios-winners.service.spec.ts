import { TestBed } from '@angular/core/testing';

import { StudiosWinnersService } from './studios-winners.service';

describe('StudiosWinnersService', () => {
  let service: StudiosWinnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiosWinnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

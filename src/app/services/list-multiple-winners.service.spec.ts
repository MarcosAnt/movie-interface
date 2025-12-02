import { TestBed } from '@angular/core/testing';

import { ListMultipleWinnersService } from './list-multiple-winners.service';

describe('ListYearsWinners', () => {
  let service: ListMultipleWinnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMultipleWinnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

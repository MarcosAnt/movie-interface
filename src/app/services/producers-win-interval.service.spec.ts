import { TestBed } from '@angular/core/testing';

import { ProducersWinIntervalService } from './producers-win-interval.service';

describe('ProducersWinIntervalService', () => {
  let service: ProducersWinIntervalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducersWinIntervalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

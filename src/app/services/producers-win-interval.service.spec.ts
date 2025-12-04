import { TestBed } from '@angular/core/testing';

import { ProducersWinIntervalService } from './producers-win-interval.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { APP_CONFIG } from '../app.config';

describe('ProducersWinIntervalService', () => {
  let service: ProducersWinIntervalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProducersWinIntervalService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ProducersWinIntervalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get producers intervals', () => {
    const mockResponse = {
      min: [{ producer: 'Producer 1', interval: 1, previousWin: 2020, followingWin: 2021 }],
      max: [{ producer: 'Producer 2', interval: 10, previousWin: 2010, followingWin: 2020 }]
    };

    service.getProducersIntervals().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${APP_CONFIG.endpoints.movieApi}/maxMinWinIntervalForProducers`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});

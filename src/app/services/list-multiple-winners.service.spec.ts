import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { ListMultipleWinnersService } from './list-multiple-winners.service';
import { APP_CONFIG } from '../app.config';
import { ListMultipleWinnersResponse } from '../shared/models/response/list-multiple-winners-response';

describe('ListMultipleWinnersService', () => {
  let service: ListMultipleWinnersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListMultipleWinnersService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(ListMultipleWinnersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call httpClient.get with correct URL', () => {
    const expectedUrl = `${APP_CONFIG.endpoints.movieApi}/yearsWithMultipleWinners`;
    const mockResponse: ListMultipleWinnersResponse = { years: [] };

    service.getMultipleWinners().subscribe();

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should return Observable<ListMultipleWinnersResponse>', () => {
    const mockResponse: ListMultipleWinnersResponse = {
      years: [{ year: 2020, winnerCount: 2 }]
    };

    service.getMultipleWinners().subscribe((response) => {
      expect(response).toEqual(mockResponse);
      expect(response.years.length).toBe(1);
    });

    const req = httpMock.expectOne(`${APP_CONFIG.endpoints.movieApi}/yearsWithMultipleWinners`);
    req.flush(mockResponse);
  });

});

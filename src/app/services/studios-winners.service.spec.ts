import { TestBed } from '@angular/core/testing';

import { StudiosWinnersService } from './studios-winners.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ListStudioWinnersResponse } from '../shared/models/response/studio-winners-response';
import { APP_CONFIG } from '../app.config';

describe('StudiosWinnersService', () => {
  let service: StudiosWinnersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudiosWinnersService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(StudiosWinnersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return top 3 studios sorted by win count', async () => {
    const mockResponse: ListStudioWinnersResponse = {
      studios: [
        { name: 'Studio A', winCount: 5 },
        { name: 'Studio B', winCount: 10 },
        { name: 'Studio C', winCount: 3 },
        { name: 'Studio D', winCount: 8 },
        { name: 'Studio E', winCount: 1 }
      ]
    };

    service.getTop3StudiosWinners().subscribe(result => {
      expect(result.studios).toHaveLength(3);
      expect(result.studios[0].name).toBe('Studio B');
      expect(result.studios[0].winCount).toBe(10);
      expect(result.studios[1].name).toBe('Studio D');
      expect(result.studios[1].winCount).toBe(8);
      expect(result.studios[2].name).toBe('Studio A');
      expect(result.studios[2].winCount).toBe(5);
    });

    const req = httpMock.expectOne(`${APP_CONFIG.endpoints.movieApi}/studiosWithWinCount`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle response with less than 3 studios', async () => {
    const mockResponse: ListStudioWinnersResponse = {
      studios: [
        { name: 'Studio A', winCount: 5 },
        { name: 'Studio B', winCount: 10 }
      ]
    };

    service.getTop3StudiosWinners().subscribe(result => {
      expect(result.studios).toHaveLength(2);
      expect(result.studios[0].winCount).toBe(10);
      expect(result.studios[1].winCount).toBe(5);
    });

    const req = httpMock.expectOne(`${APP_CONFIG.endpoints.movieApi}/studiosWithWinCount`);
    req.flush(mockResponse);
  });
});

import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG } from '../app.config';
import { ListStudioWinnersResponse } from '../shared/models/response/studio-winners-response';

@Injectable({
  providedIn: 'root',
})
export class StudiosWinnersService {
  constructor(private httpClient: HttpClient) {}

  getStudioWinners(): Observable<ListStudioWinnersResponse> {
    return this.httpClient.get<ListStudioWinnersResponse>(`${APP_CONFIG.endpoints.movieApi}/studiosWithWinCount`);
  }

  getTop3StudiosWinners(): Observable<ListStudioWinnersResponse> {
    return this.getStudioWinners().pipe(
      map((data: ListStudioWinnersResponse) => {
        const sortedStudios = [...data.studios].sort((a, b) => b.winCount - a.winCount);
        return {
          studios: sortedStudios.slice(0, 3)
        };
      })
    );
  }
}

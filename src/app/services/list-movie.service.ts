import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../app.config';
import { WinnerByYearResponse } from '../shared/models/response/winner-by-year-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListMovieService {
  constructor(private httpClient: HttpClient) { }

  getMovieByYear(year: number): Observable<WinnerByYearResponse[]> {
    return this.httpClient.get<WinnerByYearResponse[]>(`${APP_CONFIG.endpoints.movieApi}/winnersByYear?year=${year}`);
  }

}

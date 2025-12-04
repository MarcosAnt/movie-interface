import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../app.config';
import { WinnerByYearResponse } from '../shared/models/response/winner-by-year-response';
import { Observable } from 'rxjs';
import { MovieListRequest } from '../shared/models/request/movie-list-request';
import { MovieListResponse } from '../shared/models/response/movie-list-response';

@Injectable({
  providedIn: 'root',
})
export class ListMovieService {
  constructor(private httpClient: HttpClient) { }

  getMovieByYear(year: number): Observable<WinnerByYearResponse[]> {
    return this.httpClient.get<WinnerByYearResponse[]>(`${APP_CONFIG.endpoints.movieApi}/winnersByYear?year=${year}`);
  }

  getMovieList(request: MovieListRequest): Observable<MovieListResponse> {
    let url = `${APP_CONFIG.endpoints.movieApi}?page=${request.page}&size=${request.size}`;
    request.year ? url += `&year=${request.year}` : null;
    (request.winner != null && request.winner !== undefined) ? url += `&winner=${request.winner}` : null;

    return this.httpClient.get<MovieListResponse>(url);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../app.config';
import { ListMultipleWinnersResponse } from '../shared/models/response/list-multiple-winners-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListMultipleWinnersService {
  constructor(private httpClient: HttpClient) {}

  getMultipleWinners(): Observable<ListMultipleWinnersResponse> {
    return this.httpClient.get<ListMultipleWinnersResponse>(`${APP_CONFIG.endpoints.movieApi}/yearsWithMultipleWinners`);
  }
}

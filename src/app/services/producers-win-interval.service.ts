import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class ProducersWinIntervalService {
  constructor(private httpClient: HttpClient) {}

  getStudioWinners(): Observable<ProducersWinIntervalResponse> {
    return this.httpClient.get<ProducersWinIntervalResponse>(`${APP_CONFIG.endpoints.movieApi}/maxMinWinIntervalForProducers`);
  }
}

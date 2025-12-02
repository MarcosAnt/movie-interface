export interface StudioWinnersResponse {
  name: number;
  winCount: number;
}

export interface ListStudioWinnersResponse {
  studios: StudioWinnersResponse[];
}

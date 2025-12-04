export interface StudioWinnersResponse {
  name: string;
  winCount: number;
}

export interface ListStudioWinnersResponse {
  studios: StudioWinnersResponse[];
}

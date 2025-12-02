export interface MultipleWinnerResponse {
  year: number;
  winnerCount: number;
}

export interface ListMultipleWinnersResponse {
  years: MultipleWinnerResponse[];
}

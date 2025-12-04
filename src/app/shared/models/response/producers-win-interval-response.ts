export interface ProducersWinIntervalResponse {
  min: Winner[];
  max: Winner[];
}

export interface Winner {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}


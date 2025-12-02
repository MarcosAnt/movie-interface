interface ProducersWinIntervalResponse {
  min: Winner[];
  max: Winner[];
}

interface Winner {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}


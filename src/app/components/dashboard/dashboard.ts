import { Component } from '@angular/core';
import { ListmultipleWinners } from '../../shared/components/list-multiple-winners/list-multiple-winners';
import { StudiosWinners } from '../../shared/components/studios-winners/studios-winners';
import { ProducersIntervalWins } from '../../shared/components/producers-interval-wins/producers-interval-wins';
import { ListMovieYear } from '../../shared/components/list-movie-year/list-movie-year';

@Component({
  selector: 'app-dashboard',
  imports: [ListmultipleWinners, StudiosWinners, ProducersIntervalWins, ListMovieYear],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}

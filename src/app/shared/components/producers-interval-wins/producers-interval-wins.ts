import { Component, OnInit, signal } from '@angular/core';
import { ProducersWinIntervalService } from '../../../services/producers-win-interval.service';

@Component({
  selector: 'app-producers-interval-wins',
  imports: [],
  templateUrl: './producers-interval-wins.html',
  styleUrl: './producers-interval-wins.scss',
})
export class ProducersIntervalWins  implements OnInit {
  producers = signal<ProducersWinIntervalResponse>({min: [], max: []});

  constructor(private producersWinIntervalService: ProducersWinIntervalService) {}

  ngOnInit(): void {
    this.producersWinIntervalService.getStudioWinners().subscribe((data) => {
      this.producers.set(data);
    });
  }

}

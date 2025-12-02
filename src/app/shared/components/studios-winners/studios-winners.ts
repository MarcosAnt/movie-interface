import { Component, OnInit, signal } from '@angular/core';
import { StudiosWinnersService } from '../../../services/studios-winners.service';
import { ListStudioWinnersResponse } from '../../models/response/studio-winners-response';

@Component({
  selector: 'app-studios-winners',
  imports: [],
  templateUrl: './studios-winners.html',
  styleUrl: './studios-winners.scss',
})
export class StudiosWinners implements OnInit {
  listStudios = signal<ListStudioWinnersResponse>({studios: []});

  constructor(private studiosWinnersService: StudiosWinnersService) {}

  ngOnInit(): void {
    this.studiosWinnersService.getTop3StudiosWinners().subscribe((data) => {
      this.listStudios.set(data);
    });
  }
}

import { Component, OnInit, signal } from '@angular/core';
import { ListMultipleWinnersService } from '../../../services/list-multiple-winners.service';
import { ListMultipleWinnersResponse } from '../../models/response/list-multiple-winners-response';

@Component({
  selector: 'app-list-multiple-winners',
  imports: [],
  templateUrl: './list-multiple-winners.html',
  styleUrl: './list-multiple-winners.scss',
})
export class ListmultipleWinners implements OnInit {

  public listWinners = signal<ListMultipleWinnersResponse>({years: []});

  constructor(private service: ListMultipleWinnersService) {}

  ngOnInit() {
    this.service.getMultipleWinners().subscribe(data => {
      this.listWinners.set(data);
    });
  }
}

import { Component } from '@angular/core';
import { ListYearsMultipleWinners } from '../list-years-multiple-winners/list-years-multiple-winners';
import { StudiosWinners } from '../studios-winners/studios-winners';

@Component({
  selector: 'app-dashboard',
  imports: [ListYearsMultipleWinners, StudiosWinners],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}

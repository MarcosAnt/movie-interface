import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {
  pages = input<number[]>([]);
  currentPage = signal<number>(0);
  pageChange = output<number>();

   onPageClick(event: Event, page: number) {
    event.preventDefault();
    this.currentPage.set(page);
    this.pageChange.emit(page);
  }
}
